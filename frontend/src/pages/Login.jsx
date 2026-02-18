export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-[#0f172a] px-4">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <h2 className="text=3xl font-bold text-white">Control Center</h2>
          <p className="text-gray-400 mt-2 text-sm">Enter Credential</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email</label>
            <input type="email" className="w-full px-4 py-3 bg-[#0f172a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" placeholder="operator@space.com" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Password
            </label>
            <input 
              type="password" 
              className="w-full px-4 py-3 bg-[#0f172a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transform transition active:scale-95"
          >
            Submit
          </button>

        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-xs text-gray-500 hover:text-blue-400 transition">Somewhere</a>
        </div>

      </div>
    </div>
  );
}