import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  isloggedOut : false
});

export default AuthContext