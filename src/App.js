import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./context/context";
import Home from "./views/Home";
import CreateAccount from "./views/CreateAccount";
import Deposit from "./views/Deposit";
import Withdraw from "./views/Withdraw";
import AllData from "./views/AllData";
import Login from "./views/Login";
import Navbar from "./components/Navbar";
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
                name: "melanie",
                email: "melanie@gmail.com",
                password: "secret",
                balance: 100,
                session: false,
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
