import React from "react";
import ReactDOM from "react-dom";
import { SignupForm } from "./SignupForm";
import "./styles.css";

function App() {
  return <SignupForm />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
