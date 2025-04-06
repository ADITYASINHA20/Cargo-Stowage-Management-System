import React, { useState } from "react";

const CargoManagement = () => {
  const [cargoData, setCargoData] = useState(null);

  // Sample data (Ye backend se aayega in future)
  const sampleCargo = {
    cargoId: "CM-78945",
    status: "In Warehouse",
    currentLocation: "Mumbai, India",
    estimatedDeparture: "April 28, 2024",
    weight: "1200 kg",
    destination: "Dubai, UAE",
  };

  // Click pe data show karne ka function
  const handleShowData = () => {
    setCargoData(sampleCargo);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cargo Management</h1>

      {/* Button to Show Cargo Data */}
      <button 
        onClick={handleShowData} 
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 hover:bg-blue-600 transition"
      >
        Show Cargo Details
      </button>

      {/* Cargo Data Display */}
      {cargoData && (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Cargo Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <p><strong>Cargo ID:</strong> {cargoData.cargoId}</p>
            <p><strong>Status:</strong> {cargoData.status}</p>
            <p className="col-span-2"><strong>Current Location:</strong> {cargoData.currentLocation}</p>
            <p><strong>Estimated Departure:</strong> {cargoData.estimatedDeparture}</p>
            <p><strong>Weight:</strong> {cargoData.weight}</p>
            <p><strong>Destination:</strong> {cargoData.destination}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CargoManagement;
