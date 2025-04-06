
import { useState } from "react";
import axios from "axios";

const WasteManagement = () => {
  const [wasteItems, setWasteItems] = useState([]);
  const [containerId, setContainerId] = useState(""); // ✅ Moved inside
  const [undockingDate, setUndockingDate] = useState("");
  const [maxWeight, setMaxWeight] = useState("");
  const [returnPlanResult, setReturnPlanResult] = useState(null);

  const handleIdentifyWaste = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/waste/identify");
      setWasteItems(res.data.wasteItems);
    } catch (err) {
      console.error("Error identifying waste:", err);
    }
  };

  const handleReturnPlan = async () => {
    try {
      const res = await axios.post("http://localhost:8000/api/waste/return-plan", {
        undockingContainerId: containerId,
        undockingDate,
        maxWeight: parseFloat(maxWeight),
      });
      setReturnPlanResult(res.data);
    } catch (err) {
      console.error("Error fetching return plan:", err);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Waste Management</h2>

      <button
        onClick={handleIdentifyWaste}
        className="bg-red-500 text-white px-4 py-2 rounded mb-4"
      >
        Identify Waste Items
      </button>

      {wasteItems.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold">Waste Items Found:</h3>
          <ul className="list-disc ml-5">
            {wasteItems.map((item, index) => (
              <li key={index}>
                {item.name} ({item.itemId}) - {item.reason}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Extra Inputs for Return Plan */}
      <div className="mt-6">
        <input
          type="text"
          placeholder="Container ID"
          value={containerId}
          onChange={(e) => setContainerId(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="date"
          value={undockingDate}
          onChange={(e) => setUndockingDate(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Max Weight"
          value={maxWeight}
          onChange={(e) => setMaxWeight(e.target.value)}
          className="border p-2 mr-2"
        />
        <button
          onClick={handleReturnPlan}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Get Return Plan
        </button>
      </div>

      {returnPlanResult && (
        <div className="mt-4">
          <h3 className="font-semibold">Return Plan Result:</h3>
          <pre>{JSON.stringify(returnPlanResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default WasteManagement;
