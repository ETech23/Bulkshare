// pages/index.js
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Bulk Platform</h1>
      <p className="mt-4 text-xl">Buy in bulk and share the savings with others!</p>
      <div className="mt-8">
        <button
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500"
          onClick={() => window.location.href = "/signup"}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
