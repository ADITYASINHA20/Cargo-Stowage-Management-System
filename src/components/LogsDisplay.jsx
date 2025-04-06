import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LogsDisplay = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/logs');
        setLogs(res.data);
      } catch (err) {
        console.error('Error fetching logs:', err);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">📜 Activity Logs</h2>
      <div className="bg-gray-100 p-4 rounded shadow max-h-96 overflow-y-auto">
        {logs.length === 0 ? (
          <p>No logs found.</p>
        ) : (
          logs.map((log, index) => (
            <div key={index} className="mb-3 border-b pb-2">
              <p><strong>🕒 {new Date(log.timestamp).toLocaleString()}</strong></p>
              <p>📌 <strong>{log.action}</strong></p>
              <p>📝 {log.details}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default LogsDisplay;
