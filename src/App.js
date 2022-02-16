import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import CreateAccount from "./views/CreateAccount";
import Deposit from "./views/Deposit";
import Withdraw from "./views/Withdraw";
import AllData from "./views/AllData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/createaccount" element={<CreateAccount />} />;
          <Route path="/deposit" element={<Deposit />} />;
          <Route path="/withdraw" element={<Withdraw />} />;
          <Route path="/alldata" element={<AllData />} />;
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
