import React, { useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Landing from "./components/Landing"

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div className="App">
      <Header />
      <Landing />
    </div>
  );
}

export default App;
