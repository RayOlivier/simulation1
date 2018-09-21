import React, { Component } from "react"
import "./App.css"
import Header from "./components/Header/Header"
import { BrowserRouter } from "react-router-dom"
import routes from "./routes"

class App extends Component {
  // constructor() {
  //   super()

  //   this.state = {
  //     inventory: []
  //   }
  //   this.getInventory = this.getInventory.bind(this)
  // }

  // componentDidMount() {
  //   axios.get("/api/inventory").then((res) => {
  //     console.log(res)
  //     this.setState({ inventory: res.data })
  //     console.log("state:", this.state.inventory)
  //   })
  // }

  // getInventory() {
  //   axios.get("/api/inventory").then((res) => {
  //     console.log(res)
  //     this.setState({ inventory: res.data })
  //     console.log("state:", this.state.inventory)
  //   })
  // }
  render() {
    return (
      <BrowserRouter>
        <div className="whole-app">
          <Header />
          {/* <Header />
          <div className="main">
            <Dashboard inventory={this.state.inventory} />
            <Form getInv={this.getInventory} />
          </div> */}
          <main>{routes}</main>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
