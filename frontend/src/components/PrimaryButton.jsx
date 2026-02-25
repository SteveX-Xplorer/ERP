export default function PrimaryButton({text, onClick}){
    return(
        <button 
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-lg transform transition active:scale-95"
            onClick={onClick}
            >
            {text}
        </button>
    );
}