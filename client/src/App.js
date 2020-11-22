import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import InboxScreen from "./pages/InboxScreen";



function App() {
  return (
    <Route>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/inbox" component={InboxScreen} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Route>
  );
}

export default App;
