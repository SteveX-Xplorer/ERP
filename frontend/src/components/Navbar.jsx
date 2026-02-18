import  {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className="flex justify-between items-center p-4 bg-[#111827] text-white border-b border-gray-800 w-full">
            
            <div className="flex item-center gap-3">
                <span className=" text-2xl">🚀</span>
                <Link to="/" className="text-xl font-bold tracking-tight">
                        Epic Proportions
                </Link>
            </div>

            <div className="flex items-center gap-16 text-gray-400">
                <Link to="/         " className="hover:text-white flex items-center gap-2">Dashboard</Link>
                <Link to="/         " className="hover:text-white flex items-center gap-2">Admin Dashboard</Link>
            </div>

            <Link to="/login" className="border border-gray-500 px-5 py-2 rounded-md hover:bg-gray-800 transition">Login</Link>
        </nav>
    );
}