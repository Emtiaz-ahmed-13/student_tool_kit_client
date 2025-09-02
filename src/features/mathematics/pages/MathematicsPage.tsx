import React from 'react';

export const MathematicsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">📐 Mathematics</h1>
        <p className="text-lg text-gray-600">
          Master the language of numbers, patterns, and logical reasoning
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Algebra</h3>
          <p className="text-gray-600 mb-4">Equations, polynomials, and functions</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Explore
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Calculus</h3>
          <p className="text-gray-600 mb-4">Derivatives and integrals</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Explore
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Geometry</h3>
          <p className="text-gray-600 mb-4">Shapes, angles, and spatial reasoning</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Explore
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Statistics</h3>
          <p className="text-gray-600 mb-4">Data analysis and probability</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Explore
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Linear Algebra</h3>
          <p className="text-gray-600 mb-4">Vectors, matrices, and linear systems</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Explore
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Calculators</h3>
          <p className="text-gray-600 mb-4">Mathematical calculation tools</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Open Tools
          </button>
        </div>
      </div>
    </div>
  );
};

export default MathematicsPage;