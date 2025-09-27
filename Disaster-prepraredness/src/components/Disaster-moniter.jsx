import '../index.css'
import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useDispatch } from 'react-redux';
import {alertaction} from "./Store/Index";
// Helper to recenter map
function RecenterMap({ lat, lon }) {
  const map = useMap();
  useEffect(() => {
    if (lat && lon) map.setView([lat, lon], 6);
  }, [lat, lon, map]);
  return null;
}

// Helper to calculate distance (km)
function getDistance(lat1, lon1, lat2, lon2) {
  const toRad = (x) => (x * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const WeatherDisasterMap = () => {
  const API_KEY = '893df27966be289bf52a5d3718db24af';

  // States
  const [userLat, setUserLat] = useState(null);
  const [userLon, setUserLon] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [search, setSearch] = useState('');
  const [searchCity, setSearchCity] = useState(null);
  const [cityWeather, setCityWeather] = useState({});
  const [disasters, setDisasters] = useState([]);
  const [quakes, setQuakes] = useState([]);
  const [radius, setRadius] = useState(50); // km
  const [alerts, setAlerts] = useState([]); // New state for active disaster alerts
   let dispatch=useDispatch();
      dispatch(alertaction.setalert(alerts))
  const cities = [
    { name: 'Delhi', lat: 28.6139, lon: 77.209 },
    { name: 'Mumbai', lat: 19.076, lon: 72.8777 },
    { name: 'Kolkata', lat: 22.5726, lon: 88.3639 },
    { name: 'Chennai', lat: 13.0827, lon: 80.2707 },
    { name: 'Bengaluru', lat: 12.9716, lon: 77.5946 },
  ];

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setUserLat(pos.coords.latitude);
        setUserLon(pos.coords.longitude);
      });
    }
  }, []);

  // Fetch weather for preset cities
  useEffect(() => {
    cities.forEach(async (city) => {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      setCityWeather((prev) => ({ ...prev, [city.name]: data }));
    });
  }, []);

  // Fetch earthquakes
  useEffect(() => {
    fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson')
      .then(res => res.json())
      .then(data => setQuakes(data.features));
  }, []);

  // Request browser notification permission
  useEffect(() => {
    if ('Notification' in window && Notification.permission !== 'granted') {
      Notification.requestPermission();
    }
  }, []);

  // Fetch NASA EONET disasters & update alerts
  useEffect(() => {
    const fetchDisasters = async () => {
      const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v3/events');
      const data = await res.json();
      setDisasters(data.events);

      // Filter disasters within radius of user or search city
      const nearbyDisasters = data.events.filter((disaster) => {
        const [lon, lat] = disaster.geometry[0].coordinates;
        let distance = Infinity;
        if (userLat && userLon) distance = getDistance(userLat, userLon, lat, lon);
        if (searchCity) distance = Math.min(distance, getDistance(searchCity.lat, searchCity.lon, lat, lon));
        return distance <= radius;
      });

      setAlerts(nearbyDisasters); // store in state

      // Browser notifications
      nearbyDisasters.forEach((disaster) => {
        if (Notification.permission === 'granted') {
          new Notification(`Disaster Alert! ${disaster.title}`, {
            body: `Category: ${disaster.categories[0].title}`,
          });
        }
      });
    };

    fetchDisasters();
    const interval = setInterval(fetchDisasters, 5 * 60 * 1000); // refresh every 5 mins
    return () => clearInterval(interval);
  }, [userLat, userLon, searchCity, radius]);

  // Search city weather
  const fetchWeatherByCity = async (cityName) => {
    const geoRes = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`
    );
    const geoData = await geoRes.json();
    if (!geoData.length) return null;
    const { lat, lon } = geoData[0];

    const weatherRes = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const weatherData = await weatherRes.json();
    return { ...weatherData, lat, lon };
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    const data = await fetchWeatherByCity(search.trim());
    if (data) {
      setSearchCity(data);
      setSelectedCity(data);
    } else {
      alert('City not found');
    }
  };

  // Disaster visual style based on proximity
  const getDisasterStyle = (lat, lon) => {
    let distance = Infinity;
    if (userLat && userLon) distance = getDistance(userLat, userLon, lat, lon);
    if (searchCity) distance = Math.min(distance, getDistance(searchCity.lat, searchCity.lon, lat, lon));
    if (distance <= radius) return { color: 'red', radius: 15 + (radius - distance) / 5 }; // closer = bigger
    return { color: 'gray', radius: 10 };
  };

  return (
    <div>
      {/* Search bar */}
      <form onSubmit={handleSearch} className="p-2 flex justify-center space-x-2 bg-gray-100 shadow-md">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Enter city name..."
          className="border p-2 rounded-md w-64"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Search</button>
      </form>

      {/* Notification radius slider */}
      <div className="p-2 flex justify-center items-center space-x-2 bg-gray-100 shadow-md mt-2">
        <label>Notification radius: {radius} km</label>
        <input
          type="range"
          min="10"
          max="500"
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
          className="w-64"
        />
      </div>

      {/* Active alerts list */}
      <div className="p-2 bg-red-100 mt-2">
        <h2 className="font-bold">Active Alerts</h2>
        {alerts.length === 0 ? (
          <p>No nearby disasters</p>
        ) : (
          <ul>
            {alerts.map((alert) => (
              <li key={alert.id}>
                {alert.title} ({alert.categories[0].title})
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Map */}
      <MapContainer center={[20, 78]} zoom={5} style={{ height: '80vh', width: '100%' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; OpenStreetMap contributors' />

        {selectedCity && <RecenterMap lat={selectedCity.lat} lon={selectedCity.lon} />}
        {userLat && userLon && <Marker position={[userLat, userLon]}><Popup>Your location</Popup></Marker>}
        {searchCity && <Marker position={[searchCity.lat, searchCity.lon]}><Popup>{searchCity.name}</Popup></Marker>}

        {/* Preset cities weather */}
        {cities.map((city) => (
          <Marker key={city.name} position={[city.lat, city.lon]}>
            <Popup>
              {cityWeather[city.name] ? (
                <>
                  <strong>{cityWeather[city.name].name}</strong> <br />
                  🌡 Temp: {cityWeather[city.name].main.temp}°C <br />
                  ☁ {cityWeather[city.name].weather[0].description} <br />
                  💨 Wind: {cityWeather[city.name].wind.speed} m/s
                </>
              ) : 'Loading weather...'}
            </Popup>
          </Marker>
        ))}

        {/* Disaster markers */}
        {disasters.map((disaster) => {
          const [lon, lat] = disaster.geometry[0].coordinates;
          const style = getDisasterStyle(lat, lon);
          return (
            <CircleMarker key={disaster.id} center={[lat, lon]} color={style.color} radius={style.radius} fillOpacity={0.7}>
              <Popup>
                <strong>{disaster.title}</strong> <br />
                Category: {disaster.categories[0].title}
              </Popup>
            </CircleMarker>
          );
        })}

        {/* Earthquake markers */}
        {quakes.map((q) => {
          const [lon, lat, depth] = q.geometry.coordinates;
          const mag = q.properties.mag;
          return (
            <CircleMarker key={q.id} center={[lat, lon]} radius={mag * 2} color="red">
              <Popup>
                <strong>Magnitude {mag}</strong> <br />
                {q.properties.place} <br />
                Depth: {depth} km
              </Popup>
            </CircleMarker>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default WeatherDisasterMap;
