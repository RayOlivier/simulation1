import React, { Component } from "react"
import "./App.css"
import Dashboard from "./components/Dashboard/Dashboard"
import Form from "./components/Form/Form"
import Header from "./components/Header/Header"
import axios from "axios"

class App extends Component {
  constructor() {
    super()

    this.state = {
      inventory: []
    }
    this.getInventory = this.getInventory.bind(this)
  }

  componentDidMount() {
    axios.get("/api/inventory").then((res) => {
      console.log(res)
      this.setState({ inventory: res.data })
      console.log("state:", this.state.inventory)
    })
  }

  getInventory() {
    axios.get("/api/inventory").then((res) => {
      console.log(res)
      this.setState({ inventory: res.data })
      console.log("state:", this.state.inventory)
    })
  }
  render() {
    return (
      <div className="whole-app">
        <Header />
        <div className="main">
          <Dashboard inventory={this.state.inventory} />
          <Form getInv={this.getInventory} />
        </div>
      </div>
    )
  }
}

export default App
