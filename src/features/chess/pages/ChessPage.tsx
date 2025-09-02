import React from 'react';

export const ChessPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-yellow-600 mb-4">♟️ Chess</h1>
        <p className="text-lg text-gray-600">
          Master the royal game of strategy and tactics
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Opening Theory</h3>
          <p className="text-gray-600 mb-4">Learn chess openings and principles</p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
            Study
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Tactics Training</h3>
          <p className="text-gray-600 mb-4">Improve pattern recognition</p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
            Practice
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Endgame Studies</h3>
          <p className="text-gray-600 mb-4">Master chess endgames</p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
            Learn
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Game Analysis</h3>
          <p className="text-gray-600 mb-4">Analyze your games</p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
            Analyze
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Chess Engine</h3>
          <p className="text-gray-600 mb-4">Play against the computer</p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
            Play
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-3">Puzzle Solver</h3>
          <p className="text-gray-600 mb-4">Solve chess puzzles</p>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">
            Solve
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChessPage;