import React, { useState } from 'react';
import axios from 'axios';

const TimeSimulation = () => {
  const [days, setDays] = useState('');
  const [items, setItems] = useState([{ itemId: '', name: '' }]);
  const [response, setResponse] = useState(null);

  const handleAddItem = () => {
    setItems([...items, { itemId: '', name: '' }]);
  };

  const handleChangeItem = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/simulate/day', {
        numOfDays: parseInt(days),
        itemsToBeUsedPerDay: items
      });
      setResponse(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Simulate Days</h2>
      
      <input
        type="number"
        placeholder="Number of Days"
        value={days}
        onChange={(e) => setDays(e.target.value)}
        className="border p-2 mb-2 w-full"
      />

      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <input
            type="text"
            placeholder="Item ID"
            value={item.itemId}
            onChange={(e) => handleChangeItem(index, 'itemId', e.target.value)}
            className="border p-2 mr-2"
          />
          <input
            type="text"
            placeholder="Item Name"
            value={item.name}
            onChange={(e) => handleChangeItem(index, 'name', e.target.value)}
            className="border p-2"
          />
        </div>
      ))}

      <button
        onClick={handleAddItem}
        className="bg-blue-500 text-white px-3 py-1 rounded mb-4"
      >
        Add Item
      </button>

      <br />

      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Simulate
      </button>

      {response && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <h3 className="text-lg font-semibold">Simulation Result:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TimeSimulation;
