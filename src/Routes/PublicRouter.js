import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export default function PublicRouter({ children }) {
    const { currentUser } = useAuth();
    const location = useLocation();

    return currentUser && currentUser.uid ? <Navigate to={'/'} state={{ from: location }} replace/> : children;
}
