import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./context/context";
import Home from "./views/Home";
import CreateAccount from "./views/CreateAccount";
import Deposit from "./views/Deposit";
import Withdraw from "./views/Withdraw";
import AllData from "./views/AllData";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <UserContext.Provider
          value={{
            users: [
              {
                name: "abel",
                email: "abel@mit.edu",
                password: "secret",
                balance: 100,
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
          </Routes>
        </UserContext.Provider>
      </HashRouter>
    </>
  );
}

export default App;
