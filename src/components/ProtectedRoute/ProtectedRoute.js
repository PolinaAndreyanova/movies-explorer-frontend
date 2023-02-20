import React from 'react';
import {Redirect, Route} from "react-router-dom";

function ProtectedRoute({components, loggedIn, ...props}) {
  return (
    <Route>
        {/* {loggedIn ? <Component {...props} /> : <Redirect to="/signin" />} */}
        {loggedIn ? components : <Redirect to='/' />}
    </Route>
)
}

export default ProtectedRoute;