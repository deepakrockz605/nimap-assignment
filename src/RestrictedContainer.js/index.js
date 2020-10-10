import React from "react";
import { Route, Switch } from "react-router";
import Home from "../Components/Home";
import Login from "../Components/Login";
import PageNotFound from "../Components/PageNotFound";
import Task from "../Components/Task";
import User from "../Components/User";
import PublicRoute from '../Components/PublicRoute'
import PrivateRoute from '../Components/PrivateRoute'

export default function RestrictedContainer() {
  return (
    <div>
      <Switch>
        <PublicRoute restricted={true} exact path="/" component={Login} />
        <PrivateRoute restricted={false} exact path="/home" component={Home} />
        <PrivateRoute restricted={false} exact path="/task" component={Task} />
        <PrivateRoute restricted={false} exact path="/user" component={User} />
        <Route path="*" component={PageNotFound} />
      </Switch>
    </div>
  );
}
