import React from "react"
import { Switch, Route } from "react-router-dom"
import Form from "./components/Form/Form"
import Dashboard from "./components/Dashboard/Dashboard"

export default (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/add" component={Form} />
    <Route path="/edit/:id" component={Form} />
  </Switch>
)
