import React from 'react';

export const PhysicsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">⚛️ Physics</h1>
        <p className="text-lg text-gray-600">
          Explore the fundamental laws of nature and the universe
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Mechanics</h3>
          <p className="text-gray-600 mb-4">Motion, forces, and energy</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Explore
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Electromagnetism</h3>
          <p className="text-gray-600 mb-4">Electric and magnetic fields</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Explore
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Thermodynamics</h3>
          <p className="text-gray-600 mb-4">Heat and energy transfer</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Explore
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Quantum Physics</h3>
          <p className="text-gray-600 mb-4">Quantum mechanics and particles</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Explore
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Relativity</h3>
          <p className="text-gray-600 mb-4">Space, time, and gravity</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Explore
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Calculators</h3>
          <p className="text-gray-600 mb-4">Physics calculation tools</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Open Tools
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhysicsPage;