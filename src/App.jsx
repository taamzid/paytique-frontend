import Footer from "./components/Home/Footer/Footer";
import Secure from "./components/Home/Footer/Secure";
import Login from "./components/Home/Form/Login";
import SignInForm from "./components/Home/Form/SignInForm";
import Type from "./components/Home/Form/Type";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Home />
      <Login></Login>
      <Type></Type>
      <SignInForm></SignInForm>
      <Secure />
      <Footer />
    </>
  );
}

export default App;
