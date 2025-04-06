const RouteOptimization = ({ isLoggedIn }) => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Route Optimization</h1>
        {!isLoggedIn ? (
          <p className="text-center text-gray-500">Please log in to view route optimization details.</p>
        ) : (
          <div className="border border-gray-300 p-4 rounded-lg bg-gray-100">
            <p>Optimized route generated based on current cargo locations.</p>
            <ul className="list-disc list-inside mt-2">
              <li>Route 1: Dock A → Dock B → Dock C</li>
              <li>Route 2: Dock X → Dock Y → Dock Z</li>
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default RouteOptimization;
  