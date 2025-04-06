import { useState } from "react";
import { NavLink } from "react-router-dom";
import { User, X, LogOut, UserCircle } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        {/* Left Side - Logo */}
        <h1 className="text-xl font-bold">Cargo Stowage</h1>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden block text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex space-x-6 ${isOpen ? "block" : "hidden"} md:block`}>
          {["Dashboard", "Cargo", "Stowage Plan", "Tracking"].map((item) => (
            <li key={item}>
              <NavLink 
                to={`/${item.toLowerCase().replace(" ", "")}`}
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 underline" : "hover:underline"
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right Side - User Login/Profile */}
        <div className="relative">
          <button 
            className="flex items-center gap-2 hover:text-yellow-400"
            onClick={() => isLoggedIn ? setIsDropdownOpen(!isDropdownOpen) : setIsModalOpen(true)}
          >
            <User className="w-6 h-6" />
            {!isLoggedIn && <span>Login</span>}
          </button>

          {/* Dropdown (Visible after Login) */}
          {isDropdownOpen && isLoggedIn && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-gray-900 shadow-lg rounded-lg">
              <ul>
                <li className="p-2 hover:bg-gray-200 cursor-pointer flex items-center gap-2">
                  <UserCircle className="w-5 h-5" />
                  My Profile
                </li>
                <li 
                  className="p-2 hover:bg-gray-200 cursor-pointer flex items-center gap-2"
                  onClick={handleLogout}
                >
                  <LogOut className="w-5 h-5" />
                  Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      {/* Login Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Login</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input type="email" className="w-full p-2 border rounded" placeholder="Enter your email" required />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input type="password" className="w-full p-2 border rounded" placeholder="Enter your password" required />
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
                Login
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
