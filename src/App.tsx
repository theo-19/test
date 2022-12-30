import React from "react";
import "./App.css";
import MainContainer from "./layout/MainContainer";

export default React.memo(App);
function App() {
  return (
    <div className="App">
      <MainContainer />
    </div>
  );
}
