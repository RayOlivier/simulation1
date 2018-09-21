import React, { Component } from "react"
import Product from "./Product/Product"

class Dashboard extends Component {
  render() {
    console.log(this.props.inventory)

    let invList = this.props.inventory.map((e, i, arr) => {
      return (
        <Product key={i} name={e.name} price={e.price} id={e.id} img={e.img} />
      )
    })
    return (
      <div>
        <div>Dashboard test</div>
        {invList}
      </div>
    )
  }
}

export default Dashboard
