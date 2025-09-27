import React from "react";
import { useNavigate } from "react-router-dom"; // if using react-router
import { Link } from "react-router-dom";
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 to-emerald-400 dark:from-slate-900 dark:to-slate-800 text-white">
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
        <h1 className="text-5xl font-extrabold drop-shadow-lg mb-6">
          Disaster Preparedness for Schools & Colleges
        </h1>
        <p className="text-lg max-w-2xl mb-8 text-white/90">
          An interactive platform to educate, train, and empower students to respond 
          effectively during disasters through drills, awareness, and gamified learning.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Link to="/login"><button className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-emerald-500/50 transition">
            Get Started
          </button></Link>
          <Link to="/learnmore"><button className="px-6 py-3 bg-white/20 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-sky-300/50 transition">
            Learn More
          </button></Link>
          <Link to="/login"><button
            className="px-6 py-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-xl shadow-lg transform hover:scale-105 hover:shadow-emerald-500/50 transition"
          >
            Login
          </button></Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-white/10 backdrop-blur-md rounded-t-3xl">
        <h2 className="text-3xl font-bold text-center mb-10">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="p-6 bg-white/20 rounded-2xl shadow-xl transform hover:rotate-3 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">Interactive Drills</h3>
            <p className="text-sm text-white/90">
              Practice fire, earthquake, and flood drills with step-by-step guidance.
            </p>
          </div>

          <div className="p-6 bg-white/20 rounded-2xl shadow-xl transform hover:-rotate-3 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">Gamified Learning</h3>
            <p className="text-sm text-white/90">
              Earn points and badges for completing preparedness challenges.
            </p>
          </div>

          <div className="p-6 bg-white/20 rounded-2xl shadow-xl transform hover:rotate-3 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">Real-time Alerts</h3>
            <p className="text-sm text-white/90">
              Receive disaster alerts and safety tips instantly for your region.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Be Ready, Stay Safe!</h2>
        <p className="mb-8 text-white/90">
          Join thousands of students and teachers preparing for a safer tomorrow.
        </p>
        <button
          onClick={() => navigate("/auth")}
          className="px-8 py-3 bg-gradient-to-r from-pink-400 to-red-500 rounded-xl shadow-lg hover:scale-110 transition"
        >
          Join Now
        </button>
      </section>
    </div>
  );
}
