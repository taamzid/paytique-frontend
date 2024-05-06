import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountDetails from "./components/Home/Form/AccountDetails.";
import SignUp from "./components/Home/Form/SignUp";
import Type from "./components/Home/Form/Type";
import Home from "./components/Home/Home";
import Login from "./components/Home/Form/Login";
import { Dashboard } from "./components/Dashboard/Dashboard/Dashboard";

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
        </Routes>
      </Router>
    </>
  );
}

export default App;
