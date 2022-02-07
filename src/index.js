import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';

const rinkebyChainId = 4;
const supportChainIds = [rinkebyChainId];
const connectors = {
  injected: {},
};

// Render the App component to the DOM
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebWeb3Provider connectors={connectors} supportChainIds={supportChainIds}>
      <App />
    </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
