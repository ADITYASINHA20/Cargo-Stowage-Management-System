import React from "react";

const cargoGrid = [
  ["📦", "📦", "🛑", "📦"],
  ["📦", "🛑", "📦", "📦"],
  ["📦", "📦", "📦", "🛑"],
  ["🛑", "📦", "📦", "📦"],
];

const StowagePlan = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Stowage Plan</h1>

      <div className="border border-gray-300 p-4 rounded-lg bg-gray-100 h-96 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-2">
          {cargoGrid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                className={`w-16 h-16 flex items-center justify-center text-xl font-bold ${
                  cell === "🛑" ? "bg-red-400" : "bg-blue-400"
                } text-white rounded-lg`}
              >
                {cell}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default StowagePlan;
