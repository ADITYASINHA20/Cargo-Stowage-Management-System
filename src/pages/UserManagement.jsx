const UserManagement = ({ isLoggedIn }) => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">User Management</h1>
        {!isLoggedIn ? (
          <p className="text-center text-gray-500">Please log in to view user details.</p>
        ) : (
          <div className="border border-gray-300 p-4 rounded-lg bg-gray-100">
            <ul className="list-disc list-inside">
              <li>User 1 - Admin</li>
              <li>User 2 - Supervisor</li>
              <li>User 3 - Worker</li>
            </ul>
          </div>
        )}
      </div>
    );
  };
  
  export default UserManagement;
  