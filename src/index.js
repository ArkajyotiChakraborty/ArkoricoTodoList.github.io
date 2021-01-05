import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <TodoList />
  </React.StrictMode>,
  rootElement
);
