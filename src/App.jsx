import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Core UI components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LoginForm from "./components/LoginForm";

// Main pages
import Dashboard from "./pages/Dashboard";
import CargoManagement from "./pages/CargoManagement";
import StowagePlan from "./pages/StowagePlan";
import Tracking from "./pages/Tracking";

// API Features
import PlacementComponent from "./components/PlacementComponent"; // ✅ Ensure the filename is correct
import ItemSearch from "./components/ItemSearch";
import WasteManagement from "./components/WasteManagement";
import ImportItemForm from "./components/ImportItemForm"; // ✅ Corrected import
import ExportItemForm from "./components/ExportItemForm"; // ✅ Corrected import
import LogsDisplay from "./components/LogsDisplay";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="flex">
        {/* Sidebar (always visible) */}
        <Sidebar />

        <div className="flex-1 relative">
          {/* Navbar (always visible) */}
          <Navbar
            setIsLoginOpen={setIsLoginOpen}
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
          />

          {/* Login Popup */}
          {isLoginOpen && (
            <LoginForm
              setIsLoginOpen={setIsLoginOpen}
              setIsLoggedIn={setIsLoggedIn}
            />
          )}

          {/* Routes */}
          <Routes>
            {/* Main pages */}
            <Route path="/" element={<Dashboard isLoggedIn={isLoggedIn} />} />
            <Route path="/dashboard" element={<Dashboard isLoggedIn={isLoggedIn} />} />
            <Route path="/cargo" element={<CargoManagement isLoggedIn={isLoggedIn} />} />
            <Route path="/stowage" element={<StowagePlan isLoggedIn={isLoggedIn} />} />
            <Route path="/tracking" element={<Tracking isLoggedIn={isLoggedIn} />} />

            {/* API Features */}
            <Route path="/placement" element={<PlacementComponent />} />
            <Route path="/search" element={<ItemSearch />} />
            <Route path="/waste" element={<WasteManagement />} />
            <Route path="/import" element={<ImportItemForm />} /> {/* ✅ Updated */}
            <Route path="/export" element={<ExportItemForm />} /> {/* ✅ Updated */}
            <Route path="/logs" element={<LogsDisplay />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
