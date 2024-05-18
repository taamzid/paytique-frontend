import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountDetails from "./components/Home/Form/AccountDetails.";
import SignUp from "./components/Home/Form/SignUp";
import Type from "./components/Home/Form/Type";
import Home from "./components/Home/Home";
import Login from "./components/Home/Form/Login";
import { Dashboard } from "./components/Dashboard/Dashboard/Dashboard";
import Deposit from "./components/Dashboard/Dashboard/Deposit";
import Request from "./components/Dashboard/Dashboard/Request";
import Transfer from "./components/Dashboard/Dashboard/Transfer";
import Withdraw from "./components/Dashboard/Dashboard/Withdraw";
import { Qr } from "./components/Dashboard/Qr/Qr";
import Settings from "./components/Dashboard/Settings/Settings";
import Support from "./components/Dashboard/Support/Support";
import { Overview } from "./components/Dashboard/Overview/Overview";
import { Offer } from "./components/Dashboard/Offer/Offer";
import Balance from "./components/Dashboard/Balance/Balance";
import Profile from "./components/Dashboard/Profile/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/type" element={<Type />} />
          <Route path="/account-details" element={<AccountDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/offers" element={<Offer />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/support" element={<Support />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/qr-code" element={<Qr />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/request" element={<Request />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
