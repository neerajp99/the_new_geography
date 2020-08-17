import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Artists from "./components/Artists";
import Interview from "./components/Interview";
import NotFound from "./components/NotFound";

function App() {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/artists" component={Artists} />
        <Route exact path="/interview/:id" component={Interview} />
        <Route path="*" component={NotFound} /></Switch>
      </div>
    </Router>
  );
}

export default App;
