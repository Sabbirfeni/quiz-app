import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {
    const { currentUser } = useAuth();
    const [ loading, setLoading ] = useState(true)
    const location = useLocation();

    return (currentUser && currentUser.uid ? children : <Navigate to={'/login'} state={{ from: location }} replace/>);
}
