import { useState } from "react";
import { Moon, Sun, Bell, Shield, Globe, LogOut } from "lucide-react";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [location, setLocation] = useState(false);
 let formdata=useSelector(store=>store.form);
 const navigate=useNavigate();
  return (
    <div
      className={`min-h-screen flex items-center justify-center p-8 transition-all duration-500 ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      <div className="w-full max-w-3xl bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl p-8 backdrop-blur space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">
              ⚙ Settings
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Manage your preferences
            </p>
          </div>
        </div>
        {/* Preferences */}
        <div className="space-y-6">
           <div className="flex items-center justify-between p-5 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition">
            <div className="flex items-center gap-3  user">
              <div className="text-lg font-medium text-gray-800 dark:text-gray-200">
               <FaUserCircle /> Username:{formdata.fullName}
              </div>
               <div className="text-lg font-medium text-gray-800 dark:text-gray-200">
               Usermail:{formdata.email}
              </div>
            </div>
          </div>
          {/* Notifications */}
          <div className="flex items-center justify-between p-5 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition">
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-red-500" />
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Notifications
              </span>
            </div>
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="w-6 h-6 accent-red-500 cursor-pointer"
            />
          </div>

          {/* Location */}
          <div className="flex items-center justify-between p-5 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition">
            <div className="flex items-center gap-3">
              <Globe className="w-6 h-6 text-green-500" />
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Location Access
              </span>
            </div>
            <input
              type="checkbox"
              checked={location}
              onChange={() => setLocation(!location)}
              className="w-6 h-6 accent-green-500 cursor-pointer"
            />
          </div>

          {/* Security */}
          <div className="flex items-center justify-between p-5 rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition">
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-blue-500" />
              <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                Security
              </span>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
              Manage
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <button onClick={()=>navigate("/")} className="w-full py-4 rounded-2xl bg-gradient-to-r from-red-500 to-orange-500 text-white text-lg font-semibold shadow-xl hover:scale-105 transform transition flex items-center justify-center gap-2">
          <LogOut className="w-6 h-6" />
          <span>Log Out</span>
        </button>
      </div>
    </div>
  );
}
