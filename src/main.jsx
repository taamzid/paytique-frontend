import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";

//prod
const domain = "paytique.us.auth0.com";
const clientId = "Lf57nQnjJIz4zN0hzcC2bdW8WRpJxvE5";

//dev
// const domain = "fomo-upwork.us.auth0.com";
// const clientId = "GfYtsDx84NbVOIdsATRPNNqkB7h45VaM";

const redirectUri = `${window.location.origin}/dashboard`;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
