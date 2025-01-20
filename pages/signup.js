// pages/signup.js
export default function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-blue-600">Sign Up</h1>
      <form className="w-full max-w-sm mt-6">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none"
          />
        </div>
        <button
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm">
        Already have an account?{' '}
        <a href="/login" className="text-blue-600">Log in here</a>
      </p>
    </div>
  );
}
