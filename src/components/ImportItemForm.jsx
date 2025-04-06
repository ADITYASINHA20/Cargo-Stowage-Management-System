import React, { useState } from 'react';
import axios from 'axios';

const ImportItemForm = () => {
  const [form, setForm] = useState({
    name: '',
    type: '',
    x: '',
    y: '',
    z: '',
    usesLeft: '',
    expiryDate: ''
  });

  const [response, setResponse] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/import', {
        item: {
          name: form.name,
          type: form.type,
          location: {
            x: parseFloat(form.x),
            y: parseFloat(form.y),
            z: parseFloat(form.z)
          },
          usesLeft: parseInt(form.usesLeft),
          expiryDate: form.expiryDate
        }
      });
      setResponse(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Import Item</h2>

      <input name="name" placeholder="Item Name" onChange={handleChange} className="border p-2 mb-2 block w-full" />
      <input name="type" placeholder="Type" onChange={handleChange} className="border p-2 mb-2 block w-full" />
      <input name="x" placeholder="Location X" onChange={handleChange} className="border p-2 mb-2 block w-full" />
      <input name="y" placeholder="Location Y" onChange={handleChange} className="border p-2 mb-2 block w-full" />
      <input name="z" placeholder="Location Z" onChange={handleChange} className="border p-2 mb-2 block w-full" />
      <input name="usesLeft" placeholder="Uses Left" onChange={handleChange} className="border p-2 mb-2 block w-full" />
      <input name="expiryDate" type="datetime-local" onChange={handleChange} className="border p-2 mb-4 block w-full" />

      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
        Import Item
      </button>

      {response && (
        <div className="mt-4 bg-green-100 p-4 rounded">
          <h3 className="text-lg font-semibold">Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ImportItemForm;
