import {useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

export default function Login() {

  const[email, setEmail]=useState("");
  const[password, setPassword]=useState("");
  const navigate=useNavigate();

  const handleLogin= async(e)=>{
    e.preventDefault();

    try{
      const response=await fetch('http://localhost:5000/api/login',{
        method: 'POST',
        headers: {
          "Content-Type": 'application/json',
        },
        body: JSON.stringify({email, password})
      });

      const data = await response.json();

      if(data.success){
        navigate("/dashboard");
        localStorage.setItem("isLoggedIn", "true");
      }else{
        alert(data.message);
      }
    }catch(error){
      console.error("Error in connecting to server", error);
      alert("Server is down, Turn on backend Server in ./backend");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center grow w-full bg-[#0f172a] px-4">
      <div className="w-full max-w-md p-8 bg-[#1e293b] rounded-2xl shadow-2xl border border-gray-700">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Control Center</h2>
          <p className="text-gray-400 mt-2 text-sm">Enter Credential</p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email</label>
            <input 
            type="email" 
            className="w-full px-4 py-3 bg-[#0f172a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" 
            placeholder="operator@space.com" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Password
            </label>
            <input 
              type="password" 
              className="w-full px-4 py-3 bg-[#0f172a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              placeholder="••••••••"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transform transition active:scale-95">
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