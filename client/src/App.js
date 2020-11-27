import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import RegisterChoose from "./pages/RegisterChoose";
import RegisterCompany from "./pages/RegisterCompany";
import RegisterInfluencer from "./pages/RegisterInfluencer";
import Login from "./pages/Login";
import ForgottenPassword from "./pages/ForgottenPassword";
import Dashboard from "./pages/Dashboard";
import InboxScreen from "./pages/InboxScreen";



function App() {
  return (
    <Route>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/forgotten-password" component={ForgottenPassword} />
        <Route path="/register-company" component={RegisterCompany} />
        <Route path="/register-choose" component={RegisterChoose} />
        <Route path="/register-influencer" component={RegisterInfluencer} />
        <Route path="/inbox" component={InboxScreen} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Route>
  );
}

export default App;
