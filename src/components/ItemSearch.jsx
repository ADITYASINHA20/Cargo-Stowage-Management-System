import { useState } from "react";
import axios from "axios";

const ItemSearch = () => {
  const [itemId, setItemId] = useState("");
  const [itemName, setItemName] = useState("");
  const [userId, setUserId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const queryParams = new URLSearchParams();
      if (itemId) queryParams.append("itemId", itemId);
      if (itemName) queryParams.append("itemName", itemName);
      if (userId) queryParams.append("userId", userId);

      const response = await axios.get(`http://localhost:8000/api/search?${queryParams.toString()}`);
      setResult(response.data);
      setError("");
    } catch (err) {
      setError("Error fetching item.");
      setResult(null);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🔍 Item Search</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="text"
          placeholder="Item ID"
          className="p-2 border rounded"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Item Name"
          className="p-2 border rounded"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="text"
          placeholder="User ID (optional)"
          className="p-2 border rounded"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>

      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {result && (
        <div className="mt-6 border p-4 rounded bg-gray-50">
          {result.found ? (
            <>
              <h3 className="font-semibold mb-2">📦 Item Details</h3>
              <p><strong>ID:</strong> {result.item.itemId}</p>
              <p><strong>Name:</strong> {result.item.name}</p>
              <p><strong>Container:</strong> {result.item.containerId}</p>
              <p><strong>Zone:</strong> {result.item.zone}</p>
              <p>
                <strong>Position:</strong>{" "}
                ({result.item.position.startCoordinates.width},{" "}
                {result.item.position.startCoordinates.depth},{" "}
                {result.item.position.startCoordinates.height}) → (
                {result.item.position.endCoordinates.width},{" "}
                {result.item.position.endCoordinates.depth},{" "}
                {result.item.position.endCoordinates.height})
              </p>

              <h4 className="font-semibold mt-4">🔁 Retrieval Steps</h4>
              <ul className="list-disc list-inside">
                {result.retrievalSteps.map((step) => (
                  <li key={step.step}>
                    Step {step.step} - {step.action} - {step.itemName}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <p className="text-gray-600">Item not found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemSearch;
