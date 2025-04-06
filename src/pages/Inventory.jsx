const Inventory = ({ isLoggedIn }) => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Inventory</h1>
        {!isLoggedIn ? (
          <p className="text-center text-gray-500">Please log in to view inventory data.</p>
        ) : (
          <div className="border border-gray-300 p-4 rounded-lg bg-gray-100">
            <ul className="list-disc list-inside">
              <li>Item 1: 50 Units</li>
              <li>Item 2: 30 Units</li>
              <li>Item 3: 100 Units</li>
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default Inventory;
  