import {Navigate} from 'react-router-dom'

export default function ProtectedRoute({ children, requireAdmin = false }) {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const roles = JSON.parse(localStorage.getItem("userRoles") || "[]");

    if(!isLoggedIn){
        return <Navigate to="/" replace/>;
    }

    if(requireAdmin && !roles.includes("admin")){
        return <Navigate to="/dashboard" replace/>
    }
    return children;
}