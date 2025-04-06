import { useState } from "react";

const LoginForm = ({ setIsLoginOpen, setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [trackingId, setTrackingId] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password || !trackingId) {
      setError("All fields are required!");
      return;
    }

    if (username === "admin" && password === "12345" && trackingId === "TRACK123") {
      setIsLoggedIn(true);
      setIsLoginOpen(false);
    } else {
      setError("Invalid credentials. Try again!");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

        {error && <p className="text-red-500 text-center mb-2">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            {/* Username Field */}
            <label className="block text-gray-700">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full p-2 border rounded-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            {/* Password Field */}
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            {/* Tracking ID Field */}
            <label className="block text-gray-700">Tracking ID</label>
            <input
              type="text"
              placeholder="Enter your tracking ID"
              className="w-full p-2 border rounded-lg"
              value={trackingId}
              onChange={(e) => setTrackingId(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* Cancel Button */}
        <button
          onClick={() => setIsLoginOpen(false)}
          className="w-full mt-2 text-gray-500 hover:text-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
