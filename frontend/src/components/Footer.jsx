export default function Footer(){
    return(
        <footer className="flex justify-center items-center p-6 bg-[#111827] text-gray-400 border-t border-gray-800 h-10 w-full text-s rounded-sm">
            <div>
                &copy; 2026 <strong className="text-white"> &rarr; Epic Proportion</strong> | ERP System v0.0 | &nbsp;
            </div>
            <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="font-medium">  System Normal </span>
            </div>
        </footer>
    );
}