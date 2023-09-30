import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
// provider inside of the  index file
// provider should be wraping <app/> component and include a store property as "store={store}"
import usersReducer from "./features/Users";
const store = configureStore({
  reducer: {
    // it goes from store file
    users: usersReducer
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
