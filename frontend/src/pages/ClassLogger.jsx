import React, { useState } from 'react';

export default function ClassLogger(){

    const targetClasses=8;
    const previousMonthTotal=10;
    const pastCumulative=12;

    const [classes, setClasses]=useState([
        { id: 1, date: "2026-02-20", subject: "Data Structures", type: "Regular" },
        { id: 2, date: "2026-02-21", subject: "Algorithms", type: "Regular" },
        { id: 3, date: "2026-02-21", subject: "Lab Support", type: "Extra" },
    ]);

    const [newSubject, setNewSubject] = useState("");
    const [newType, setNewType] = useState("Regular");

    const currentRegular = classes.filter(c => c.type === "Regular").length;
    const currentExtra = classes.filter(c => c.type === "Extra").length;
    const currentTotal = classes.length;
    const grandTotal = pastCumulative + currentTotal;

    const handleLogClass = (e) => {
        e.preventDefault();
        if (!newSubject) return;

        const newClass = {
            id: Date.now(),
            date: new Date().toISOString().split('T')[0],
            subject: newSubject,
            type: newType
        };
        
        setClasses([newClass, ...classes]);
        setNewSubject("");
    };

    return(
        <div className='grow p-8 bg-[#0f172a] text-white'>
            <header className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Faculty Workload Tracker</h1>
                <p className="text-gray-400">Log your sessions and track your monthly targets.</p>
            </header>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
                <div className="p-6 bg-[#1e293b] rounded-xl border border-gray-700">
                    <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Previous Month</h3>
                    <div className="text-3xl font-bold text-gray-300">{previousMonthTotal} <span className="text-lg font-normal text-gray-500">classes</span></div>
                </div>

                <div className="p-6 bg-blue-900/20 rounded-xl border border-blue-800 shadow-[0_0_15px_rgba(37,99,235,0.1)]">
                    <h3 className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-2">Current Month</h3>
                    <div className="flex justify-between items-end">
                        <div>
                            <div className="text-4xl font-extrabold text-blue-400">{currentTotal} <span className="text-lg font-medium text-blue-600">/ {targetClasses}</span></div>
                        </div>
                        <div className="text-right text-sm">
                            <div className="text-green-400">{currentRegular} Regular</div>
                            <div className="text-yellow-400">{currentExtra} Extra</div>
                        </div>
                    </div>
 
                    <div className="w-full bg-gray-800 rounded-full h-2 mt-4">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${Math.min((currentTotal / targetClasses) * 100, 100)}%` }}></div>
                    </div>
                </div>

                <div className="p-6 bg-[#1e293b] rounded-xl border border-gray-700">
                    <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">Cumulative (YTD)</h3>
                    <div className="text-3xl font-bold text-white">{grandTotal} <span className="text-lg font-normal text-gray-500">Total</span></div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div className='lg:col-span-1 bg-[#1e293b] p-6 rounded-xl border border-gray-700 h-fit'>
                    <h2 className='text-xl font-bold mb-4'>Log a Session</h2>

                    <form onSubmit={handleLogClass} className="space-y-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Subject / Description</label>
                            <input 
                                type="text" 
                                value={newSubject}
                                onChange={(e) => setNewSubject(e.target.value)}
                                className="w-full bg-[#0f172a] border border-gray-600 rounded p-2 text-white"
                                placeholder="e.g. CS-101 Lecture"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Class Type</label>
                            <select 
                                value={newType}
                                onChange={(e) => setNewType(e.target.value)}
                                className="w-full bg-[#0f172a] border border-gray-600 rounded p-2 text-white"
                            >
                                <option value="Regular">Regular Class</option>
                                <option value="Extra">Extra / Substitution</option>
                            </select>
                        </div>
                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition">
                            Save Entry
                        </button>
                    </form>

                </div>
            </div>

            <div className="lg:col-span-2 bg-[#1e293b] rounded-xl border border-gray-700 overflow-hidden">
                    <div className="p-4 border-b border-gray-700 bg-gray-800/50">
                        <h2 className="text-lg font-bold">Recent Entries (This Month)</h2>
                    </div>
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-[#0f172a] text-gray-400 text-sm border-b border-gray-700">
                                <th className="p-4">Date</th>
                                <th className="p-4">Subject</th>
                                <th className="p-4">Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {classes.map((c) => (
                                <tr key={c.id} className="border-b border-gray-800 hover:bg-gray-800/50 transition">
                                    <td className="p-4 text-gray-300">{c.date}</td>
                                    <td className="p-4 font-medium">{c.subject}</td>
                                    <td className="p-4">
                                        <span className={`px-2 py-1 rounded text-xs font-bold ${c.type === 'Regular' ? 'bg-green-900/30 text-green-400' : 'bg-yellow-900/30 text-yellow-400'}`}>
                                            {c.type}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

        </div>
    );
}