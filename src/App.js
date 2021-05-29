import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Order from "./components/Dashboard/Order/Order";
import Home from "./components/Home/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const loginContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  return (
    <loginContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute path="/dashboard/order/:id">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </loginContext.Provider>
  );
}

export default App;
