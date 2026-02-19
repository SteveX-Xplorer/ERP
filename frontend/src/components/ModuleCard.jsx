export default function ModuleCard({ title, icon, status, onSelect}){
    return(

        <div onClick={() => onSelect(title)} className="p-6 bg-[#1e293b] border border-gray-700 rounded-xl hover:border-blue-500 transition-colors cursor-pointer group shadow-lg">
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                {icon}
            </div>

            <h3 className="text-lg font-bold">{title}</h3>
            <div className="flex items-center gap-2 mt-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">{status}</span>
            </div>

        </div>
    );
}