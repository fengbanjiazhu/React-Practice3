import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const context = useContext(AuthContext);

  useEffect(() => {
    const userLoginInfo = localStorage.getItem("isLoggedIn");
    if (userLoginInfo === "1") setIsLoggedIn(true);
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  return (
    <React.Fragment>
      <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}>
        <MainHeader />
        <main>
          {!isLoggedIn && <Login />}
          {isLoggedIn && <Home />}
        </main>
      </AuthContext.Provider>
    </React.Fragment>
  );
}
export default App;
