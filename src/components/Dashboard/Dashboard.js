import React, { Component } from "react"
import Product from "./Product/Product"
import "./Dashboard.css"
import axios from "axios"

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      inventory: []
    }
    this.getInventory = this.getInventory.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
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

  deleteProduct(prodId) {
    axios.delete(`/api/product/${prodId}`).then((res) => {
      console.log(res)
      this.getInventory()
      // this.setState({ inventory: res.data })
    })
  }

  render() {
    console.log(this.state.inventory)

    let invList = this.state.inventory.map((e, i, arr) => {
      return (
        <Product
          key={i}
          name={e.name}
          price={e.price}
          id={e.id}
          img={e.img}
          deleteProduct={this.deleteProduct}
        />
      )
    })
    return <div className="whole-dash">{invList}</div>
  }
}

export default Dashboard
