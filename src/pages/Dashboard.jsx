import React from 'react'

const Dashboard = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-lg">
          <h2 className="text-lg font-bold">Total Cargo</h2>
          <p className="text-2xl">128</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg">
          <h2 className="text-lg font-bold">Weight Distribution</h2>
          <p className="text-2xl">Balanced</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg">
          <h2 className="text-lg font-bold">Alerts</h2>
          <p className="text-2xl">2 Issues</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard

