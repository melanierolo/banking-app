import "./App.css";
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./context/context";
import Home from "./views/home";
import CreateAccount from "./views/createaccount";
import Deposit from "./views/deposit";
import Withdraw from "./views/withdraw";
import AllData from "./views/alldata";
import Login from "./views/login";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <HashRouter>
        <Navbar className="navbar__spa" />
        <UserContext.Provider
          value={{
            users: [
              {
                balance: 100,
                name: "melanie",
                email: "melanie@gmail.com",
                password: "secret",
                isLoggedIn: false,
                id: 1,
              },
            ],
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />;
            <Route path="/createaccount" element={<CreateAccount />} />;
            <Route path="/deposit" element={<Deposit />} />;
            <Route path="/withdraw" element={<Withdraw />} />;
            <Route path="/alldata" element={<AllData />} />;
            <Route path="/login" element={<Login />} />;
          </Routes>
        </UserContext.Provider>
        <Footer className="footer__spa" />
      </HashRouter>
    </>
  );
}

export default App;
