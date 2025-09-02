import React from "react";

export const ComputerSciencePage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">
          💻 Computer Science
        </h1>
        <p className="text-lg text-gray-600">
          Explore algorithms, data structures, and computational thinking
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Data Structures</h3>
          <p className="text-gray-600 mb-4">Arrays, trees, graphs, and more</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Learn
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Algorithms</h3>
          <p className="text-gray-600 mb-4">
            Sorting, searching, and optimization
          </p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Practice
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Programming Languages</h3>
          <p className="text-gray-600 mb-4">
            Python, JavaScript, Java, and more
          </p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Code
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Database Systems</h3>
          <p className="text-gray-600 mb-4">SQL, NoSQL, and data modeling</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Query
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Web Development</h3>
          <p className="text-gray-600 mb-4">
            Frontend and backend technologies
          </p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Build
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Algorithm Visualizer</h3>
          <p className="text-gray-600 mb-4">Visualize algorithm execution</p>
          <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
            Visualize
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComputerSciencePage;
