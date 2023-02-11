import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  // set a empty func, can help with auto-fill
  onLogout: () => {},
});

export default AuthContext;
