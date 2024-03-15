import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, isLoggedIn }) => {
  // agr tum logged in ho to tumhe dashboard mil jayega
    if (isLoggedIn) {
        return children;
    }
    else {
        return <Navigate to="/login" />;
    }
}

export default PrivateRoute