import { MdMicNone } from "react-icons/md";

function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 p-8 space-y-6 text-center">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-gray-800">
        Voice AI for Developers
      </h1>
      <p className="text-gray-600 max-w-2xl">
        Vapi lets developers build, test, and deploy voice agents in minutes rather than months.
      </p>

      {/* Mic Icon */}
      <div className="flex justify-center">
        <div className="rounded-full bg-gradient-to-r from-green-400 to-green-600 p-4 shadow-md hover:scale-105 transition-transform duration-300">
          <MdMicNone className="text-white text-4xl" />
        </div>
      </div>

      {/* Call to Action */}
      <h2 className="px-6 py-3 text-md font-semibold text-green-500 rounded-3xl bg-gray-700 border-2 border-green-600  shadow-md">
        Give it a try!
      </h2>

      <div className="flex space-x-4 ">
        <button className="px-6 py-3 rounded-3xl bg-green-600 text-gray-700 font-semibold hover:bg-green-700 transition-colors duration-300 shadow-md">
          Try for free
        </button>
        <button className="px-6 py-3 text-black font-semibold hover:text-gray-700 transition-colors duration-300">
          Get in touch {">"}
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
