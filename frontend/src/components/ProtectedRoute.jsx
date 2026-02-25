import {Navigate} from 'react-router-dom'

export default function PublicRoute({children}){
    const isLoggedIn=localStorage.getitem("isLoggedIn")==="true";

    if(!isLoggedIn){
        return <Navigate to="/dashboatd" replace/>;
    }
    return children;
}