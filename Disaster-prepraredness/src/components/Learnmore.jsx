import React from "react";

export default function LearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-400 to-emerald-400 dark:from-slate-900 dark:to-slate-800 text-white px-6 py-12">
      
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-center mb-10 drop-shadow-lg">
        Learn More About Disaster Preparedness
      </h1>

      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-lg text-white/90 leading-relaxed">
          Our platform is designed to prepare <span className="font-bold">school and college students</span> 
          for real-life disasters through awareness, interactive drills, and engaging learning methods.  
          Preparedness is the key to saving lives.
        </p>
      </div>

      {/* Sections */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Awareness */}
        <div className="p-6 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl transform hover:scale-105 hover:rotate-1 transition">
          <h2 className="text-2xl font-semibold mb-3">📢 Awareness</h2>
          <p className="text-white/90">
            Students will learn about different disasters like earthquakes, floods, fires, and cyclones. 
            Real-time tips and regional alerts help them stay informed.
          </p>
        </div>

        {/* Drills */}
        <div className="p-6 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl transform hover:scale-105 hover:-rotate-1 transition">
          <h2 className="text-2xl font-semibold mb-3">🚨 Interactive Drills</h2>
          <p className="text-white/90">
            Practice emergency drills with guided steps.  
            Fire, earthquake, and flood evacuation simulations build real confidence. 
          </p>
        </div>

        {/* Gamification */}
        <div className="p-6 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl transform hover:scale-105 hover:rotate-1 transition">
          <h2 className="text-2xl font-semibold mb-3">🎮 Gamified Learning</h2>
          <p className="text-white/90">
            Quizzes, challenges, and leaderboards make preparedness fun and interactive.  
            Students earn points and badges for participation.
          </p>
        </div>

        {/* Community */}
        <div className="p-6 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl transform hover:scale-105 hover:-rotate-1 transition">
          <h2 className="text-2xl font-semibold mb-3">🤝 Community & Safety</h2>
          <p className="text-white/90">
            Students and teachers collaborate as a safety network, 
            ensuring collective action during disasters.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 bg-gradient-to-r from-pink-400 to-red-500 rounded-xl shadow-lg hover:scale-110 transition"
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
}
