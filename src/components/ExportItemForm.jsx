import React, { useState } from 'react';
import axios from 'axios';

const ExportItemForm = () => {
  const [itemId, setItemId] = useState('');
  const [response, setResponse] = useState(null);

  const handleExport = async () => {
    try {
      const res = await axios.delete(`http://localhost:8000/api/export/${itemId}`);
      setResponse(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Export Item</h2>
      <input
        placeholder="Item ID"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
        className="border p-2 mb-4 block w-full"
      />
      <button onClick={handleExport} className="bg-red-500 text-white px-4 py-2 rounded">
        Export Item
      </button>

      {response && (
        <div className="mt-4 bg-yellow-100 p-4 rounded">
          <h3 className="text-lg font-semibold">Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ExportItemForm;
