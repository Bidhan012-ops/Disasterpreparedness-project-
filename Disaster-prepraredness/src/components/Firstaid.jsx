import style from './firstaid.module.css';

const Firstaid = () => {
  const handleSearch = () => {
    let input = document.getElementById("locationInput").value;
    let type = document.getElementById("typeSelect").value;
    if (input.trim() === "") {
      alert("Please enter a location.");
      return;
    }
    let map = document.getElementById("mapFrame");
    map.src =
      "https://www.google.com/maps?q=" +
      encodeURIComponent(input + " " + type) +
      "&output=embed";
  };

  return (
    <>
      <div className={style.heade}>
        <h1>First Aid & Medical Help</h1>
        <p>Part of Disaster Management Awareness Portal</p>
      </div>

      <nav className={style.nav}>
        <a href="firstaid.html" className={style.active}>
          First Aid
        </a>
      </nav>

      <div className={style.container}>
        <section className={style.intro}>
          <h2>Be Prepared, Stay Safe</h2>
          <p>
            In disasters, timely medical response and basic first aid knowledge
            can save lives. This section provides critical information and
            resources for immediate help.
          </p>
        </section>

        <center><div className={style.searchSection}>
          <h3>Find Nearest Hospitals, Clinics or Pharmacies</h3>
          <div className={style.searchBox}>
            <input
              type="text"
              id="locationInput"
              placeholder="Enter city, area, or pincode (e.g., Mumbai 400001)"
            />
            <select id="typeSelect">
              <option value="hospital">Hospitals</option>
              <option value="clinic">Clinics</option>
              <option value="pharmacy">Pharmacies</option>
            </select>
            <button onClick={handleSearch}>🔍 Search</button>
          </div>
          <div className={style.mapContainer}>
            <iframe
              id="mapFrame"
              src="https://www.google.com/maps?q=hospital&output=embed"
              allowFullScreen
              loading="lazy"
              title="map"
            ></iframe>
          </div>
        </div></center>

        <div className={style.grid}>
          <div className={style.card}>
            <a
              href="https://youtu.be/A6j0iHyTD2g?si=vF2j5yIS7kfpSDVB&t=68"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/005/321/529/non_2x/first-aid-kit-first-aid-bag-icon-medical-box-free-vector.jpg"
                alt="Illustration of a first aid kit"
                loading="lazy"
              />
              <div className={style.cardContent}>
                <h3>Basic First Aid</h3>
                <p>
                  Learn essential first aid for burns, fractures, bleeding, and
                  shock. Immediate care reduces complications before professional
                  help arrives.
                </p>
              </div>
            </a>
          </div>

          <div className={style.card}>
            <a
              href="https://youtu.be/TLr2qsEhpC8?si=EQhsPiw4ekIO4Ky_&t=20"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src="https://arascamedical.com/wp-content/uploads/2023/06/Burn-Degree.jpeg"
                alt="First Aid treatment for burns"
                loading="lazy"
              />
              <div className={style.cardContent}>
                <h3>First Aid – Burns</h3>
                <p>Cool with running water for 10 minutes. Do not apply ice or butter.</p>
              </div>
            </a>
          </div>

          <div className={style.card}>
            <a
              href="https://youtu.be/sPzXAVNVJr0?si=wiHzJd4HUsAYbN3J&t=3"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src="https://www.kimssunshine.co.in/wp-content/uploads/2024/08/First-Aid-for-Fracture_-A-Comprehensive-Guide.jpg"
                alt="First Aid for fractures"
                loading="lazy"
              />
              <div className={style.cardContent}>
                <h3>First Aid – Fractures</h3>
                <p>
                  Immobilize the limb. Use a splint or cloth for support. Do not move
                  unnecessarily.
                </p>
              </div>
            </a>
          </div>

          <div className={style.card}>
            <a
              href="https://youtu.be/3Ag8rhvpCuE?si=ADgt06wnoWxnDHjL&t=23"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src="https://cdn.prod.website-files.com/63723fe799096ad12312edc2/63c272bd4553f6869cb4f735_First%20Aid%20for%20Bleeding%206%20Steps%20To%20Treat%20External%20Bleeding.png"
                alt="First Aid for bleeding"
                loading="lazy"
              />
              <div className={style.cardContent}>
                <h3>First Aid – Bleeding</h3>
                <p>Apply firm pressure with a clean cloth. Elevate the wound if possible.</p>
              </div>
            </a>
          </div>

          <div className={style.card}>
            <a
              href="https://youtu.be/bU5aLqi25Fk?si=cN4KywQXGE0zqP_M&t=22"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src="https://steadfasthealth.in/wp-content/uploads/WhatsApp-Image-2022-03-23-at-12.37.01-960x551.jpeg"
                alt="First Aid for shock"
                loading="lazy"
              />
              <div className={style.cardContent}>
                <h3>First Aid – Shock</h3>
                <p>
                  Lay the person flat, elevate legs, keep them warm, and reassure until
                  help arrives.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <a
        href="tel:108"
        className={style.emergencyBtn}
        aria-label="Call emergency ambulance number 108"
      >
        🚑 Call 108 Now
      </a>

      <footer className={style.footer}>
        <p>&copy; 2025 Disaster Management Authority | All Rights Reserved</p>
      </footer>
    </>
  );
};

export default Firstaid;
