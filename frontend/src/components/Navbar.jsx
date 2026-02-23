import  {Link, useNavigate} from 'react-router-dom';

export default function Navbar(){

    const navigate=useNavigate();

    const isLoggedIn=localStorage.getItem("isLoggedIn")=="true";
    const userEmail=localStorage.getItem("userEmail")||"Operator";
    const roles=JSON.parse(localStorage.getItem("userRoles")||"[]");

    const handleLogout=()=>{
        localStorage.clear();
        navigate("/");
    };

    return(
        <nav className="flex justify-between items-center px-8 py-3 bg-[#111827] text-white border-b border-gray-800 shadow-lg h-15 w-full text-s rounded-sm">
            
            <div className="flex items-center gap-3">
                <span className=" text-2xl">🚀</span>
                <Link to="/" className="text-xl font-bold tracking-tight hover:opacity-90 transition-opacity">
                        Epic Proportions
                </Link>
            </div>

            <div className="flex items-center gap-10">
                {isLoggedIn && (
                    <>
                        <Link to="/dashboard" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">Dashboard</Link>
                        {roles.includes("admin")&&(
                            <Link to="/admin" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">Admin Dashboard</Link>
                        )}
                    </>
                )}
            </div>
            
            <div className="flex items-center gap-4">
                {isLoggedIn?(
                    <>
                    <span className="text-gray-400 border-r border-gray-700 pr-4 italic">
                        {userEmail}
                    </span>
                    <button
                    onClick={handleLogout}
                    className="px-4 py-1.5 bg-red-900/20 border border-red-900 text-red-400 rounded-md font-medium hover:bg-red-900 hover:text-white transition-all duration-300">
                        Logout
                    </button>
                    </>
                ):(
                    <Link to="/login" className="flex items-center gap-2 px-4 py-1.5 border border-gray-600 rounded-md text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
}