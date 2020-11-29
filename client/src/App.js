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
import NewCampaign from "./pages/NewCampaign";
import DashboardDisplay from "./pages/DashboardDisplay";
import CompaniesLanding from "./pages/CompaniesLanding";
import InfluencersLanding from "./pages/InfluencersLanding";
import QA from "./pages/QA";



function App() {
  return (
    <div class="font-general tracking-wider text-gray-800">
    <Route>
      <Switch>
      <Route exact path="/dashboard-display" component={DashboardDisplay} />

        <Route exact path="/" component={Home} />
        <Route path="/companies" component={CompaniesLanding} />
        <Route path="/creators" component={InfluencersLanding} />
        <Route path="/new-campaign" component={NewCampaign} />
        <Route path="/qa" component={QA} />
        <Route path="/login" component={Login} />
        <Route path="/forgotten-password" component={ForgottenPassword} />
        <Route path="/register-company" component={RegisterCompany} />
        <Route path="/register-choose" component={RegisterChoose} />
        <Route path="/register-influencer" component={RegisterInfluencer} />
        <Route path="/inbox" component={InboxScreen} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Route>
    </div>
  );
}

export default App;
