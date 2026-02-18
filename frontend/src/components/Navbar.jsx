import  {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center px-8 py-3 bg-[#111827] text-white border-b border-gray-800 shadow-lg h-15 w-full text-s rounded-sm">
            
            <div className="flex items-center gap-3">
                <span className=" text-2xl">🚀</span>
                <Link to="/" className="text-xl font-bold tracking-tight hover:opacity-90 transition-opacity">
                        Epic Proportions
                </Link>
            </div>

            <div className="flex items-center gap-10">
                <Link to="/         " className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">Dashboard</Link>
                <Link to="/         " className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">Admin Dashboard</Link>
            </div>

            <Link to="/login" className="flex items-center gap-2 px-4 py-1.5 border border-gray-600 rounded-md text-sm font-medium hover:bg-white hover:text-black transition-all duration-300">Login</Link>
        </nav>
    );
}