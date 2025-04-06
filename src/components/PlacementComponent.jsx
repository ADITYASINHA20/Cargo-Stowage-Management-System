// PlacementComponent.jsx
import React, { useState } from "react";
import api from "../api/api";


const PlacementComponent = () => {
  const [response, setResponse] = useState(null);

  const handlePlacement = async () => {
    try {
      const res = await api.post("/placement", {
        cargo: "steel",
        weight: 1200,
        volume: 40,
      });
      setResponse(res.data);
    } catch (error) {
      console.error("Placement error:", error);
    }
  };

  return (
    <div className="p-4">
      <button onClick={handlePlacement} className="bg-blue-500 text-white px-4 py-2 rounded">
        Get Placement
      </button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default PlacementComponent;
