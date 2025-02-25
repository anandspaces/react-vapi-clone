import { MdMicNone } from "react-icons/md";

function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-white p-8 space-y-8 text-center">
      {/* Heading */}
      <h1 className="text-6xl font-extrabold text-gray-800 leading-snug">
        Voice AI for Developers
      </h1>
      <p className="text-gray-600 max-w-2xl text-lg">
        Vapi lets developers build, test, and deploy voice agents in minutes rather than months.
      </p>

      {/* Mic Icon */}
      <div className="flex justify-center">
        <div className="rounded-full bg-gradient-to-r from-green-500 to-green-700 p-6 shadow-lg hover:scale-110 transition-transform duration-300">
          <MdMicNone className="text-white text-5xl" />
        </div>
      </div>

      {/* Call to Action */}
      <h2 className="text-lg font-semibold text-green-600 rounded-3xl bg-green-100 px-6 py-3 shadow-md">
        Give it a try!
      </h2>

      <div className="flex space-x-6">
        <button className="px-8 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors duration-300 shadow-md hover:shadow-lg">
          Try for free
        </button>
        <button className="px-8 py-3 rounded-full text-green-600 border-2 border-green-600 font-semibold hover:bg-green-50 transition-colors duration-300 shadow-md hover:shadow-lg">
          Get in touch {">"}
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
