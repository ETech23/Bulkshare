// pages/dashboard.js
export default function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">Dashboard</h1>
      <div className="mt-8 w-full max-w-md">
        <h2 className="text-xl font-semibold text-gray-800">Your Groups</h2>
        {/* Example of a user's group list */}
        <ul className="mt-4">
          <li className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md mb-4">
            <span>Group: Bulk Food Buy</span>
            <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-500">
              Leave Group
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
