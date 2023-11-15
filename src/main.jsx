import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import accountStore from './components/redux/bankStore/bankStore.js'
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={accountStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
