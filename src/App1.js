import React from "react";
import App from "./App";
import "./my-food-app/components/FormValidation/form.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainFrame from "./my-food-app/components/FormValidation/MainFrame";
import SignUp from "./my-food-app/components/FormValidation/SignUp";
import Login from "./my-food-app/components/FormValidation/Login";
import Cart from "./my-food-app/components/cart/Cart";
import Description from "./my-food-app/components/cart/Description";
import { Provider } from "react-redux";
import store from "./my-food-app/components/redex/redex-1";
import Profile from "./my-food-app/components/navBar/Profile";
import Protected from "./Protected";
import Search from "./my-food-app/components/navBar/Search";

const App1 = () => {

  return (
    <div id="color1">
      <BrowserRouter>
        <Provider store={store}>
          <Switch>
            <Route exact path="/">
              <MainFrame />
            </Route>

            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/dashboard">
              <Protected>
                <App />
              </Protected>
            </Route>
            <Route path="/cart">
              <Protected>
                <Cart />
              </Protected>
            </Route>
            <Route path="/description">
              <Protected>
                <Description />
              </Protected>
            </Route>
            <Route path="/profile">
              <Protected>
                <Profile />
              </Protected>
            </Route>
            <Route path="/search">
              <Protected>
                <Search />
              </Protected>
            </Route>
          </Switch>
        </Provider>
      </BrowserRouter>
    </div>
  );
};

export default App1;
