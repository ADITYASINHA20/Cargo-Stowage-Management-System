import { Link } from "react-router-dom";
import { FaBars, FaRoute, FaUsers, FaBoxes, FaDatabase, FaCog } from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`h-screen bg-gray-900 text-white p-5 ${isOpen ? "w-64" : "w-16"} transition-all duration-300`}>
      {/* Toggle Button */}
      <button className="text-white text-2xl mb-4" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </button>

      {isOpen && <h2 className="text-lg font-bold mb-5">Cargo System</h2>}

      {/* Navigation Links */}
      <nav>
        <ul>
          <li className="mb-4 flex items-center gap-3">
            <FaRoute />
            {isOpen && <Link to="/placement" className="hover:text-blue-400">Placement</Link>}
          </li>
          <li className="mb-4 flex items-center gap-3">
            <FaUsers />
            {isOpen && <Link to="/search" className="hover:text-blue-400">Item Search</Link>}
          </li>
          <li className="mb-4 flex items-center gap-3">
            <FaBoxes />
            {isOpen && <Link to="/waste" className="hover:text-blue-400">Waste Mgmt</Link>}
          </li>
          <li className="mb-4 flex items-center gap-3">
            <FaDatabase />
            {isOpen && <Link to="/import-export" className="hover:text-blue-400">Import/Export</Link>}
          </li>
          <li className="mb-4 flex items-center gap-3">
            <FaCog />
            {isOpen && <Link to="/logs" className="hover:text-blue-400">Logs</Link>}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
