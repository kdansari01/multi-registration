import React from "react";
import { ProgressBar } from "./components/StepProgressBar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>MultiStep Registration</h1>
      <hr />

      <div>
        <ProgressBar />
      </div>
    </div>
  );
}
