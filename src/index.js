import React from "react";
import { render } from "react-dom";
import App from "./components/App";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const Index = () => (
  <div style={styles}>
    <App />
  </div>
);

render(<Index />, document.getElementById("root"));
