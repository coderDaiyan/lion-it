import { createContext, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import GiveReview from "./components/Dashboard/GiveReview/GiveReview";
import Order from "./components/Dashboard/Order/Order";
import OrderList from "./components/Dashboard/OrderList/OrderList";
import Home from "./components/Home/Home/Home";
import Navbar from "./components/Home/Navbar/Navbar";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Store from "./redux/store";

export const loginContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  return (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <loginContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Navbar />
            <Switch>
              <PrivateRoute path="/dashboard/review">
                <GiveReview />
              </PrivateRoute>
              <PrivateRoute path="/dashboard/orders">
                <OrderList />
              </PrivateRoute>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
