import PreparednessScore from "./pre";
import LiveAlerts from "./LiveAlerts";
import UpcomingDrills from "./UpcomingDrills";
import ActionButtons from "./ActionButtons";
import Safefeatures from "./Safefeatures";

const Dashboared = () => {
  return (
    <>
      <Safefeatures />

      <main className="p-6 min-h-screen bg-gradient-to-br from-teal-50 via-cyan-100 to-blue-200">
        {/* Dashboard Title */}
        <h2 className="text-2xl font-bold text-indigo-900 mb-6 border-l-4 border-teal-500 pl-3 drop-shadow-lg">
         
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl hover:scale-[1.02] rounded-2xl p-5 transition transform">
              <ActionButtons />
            </div>
            <div className="bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl hover:scale-[1.02] rounded-2xl p-5 transition transform">
              <UpcomingDrills />
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl hover:scale-[1.02] rounded-2xl p-5 transition transform">
              <PreparednessScore score={75} />
            </div>
            <div className="bg-white/90 backdrop-blur-sm shadow-md hover:shadow-xl hover:scale-[1.02] rounded-2xl p-5 transition transform">
              <LiveAlerts />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboared;
