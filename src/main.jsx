import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Services/Store/store.js";
import ContextProvider from "./Services/Context/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
    <ContextProvider>

        <App />
    </ContextProvider>
      </Provider>

    </BrowserRouter>
  </React.StrictMode>
);
