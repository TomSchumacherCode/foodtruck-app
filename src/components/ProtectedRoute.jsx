import React from "react";
import { Navigate } from "react-router-dom";


function ProtectedRoute({activeUser, isPrivate, children}) {
    const redirectTo = isPrivate ? "/login" : "/about";
    if ((activeUser && isPrivate) || (!activeUser && !isPrivate)) {
      return <>{children}</>;
    } else {
      return <Navigate to={redirectTo} />;
    }
}


export default ProtectedRoute;