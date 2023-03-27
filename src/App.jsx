import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";

function App() {
  const pay = async () => {
    const url = "https://tinypesa.com/api/v1/express/initialize";
    fetch(url, {
      body: "amount=1&msisdn=0113608188",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        ApiKey: "dk4xwwRFEda",
      },
      method: "POST",
    });
  };
  return (
    <div className="App">
      <button onClick={pay}>Pay</button>
    </div>
  );
}

export default App;
