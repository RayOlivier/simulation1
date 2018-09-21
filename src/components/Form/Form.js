import React, { Component } from "react"

class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: "",
      price: 0,
      imgurl: ""
    }

    this.handleChange = this.handleChange.bind(this)
    // this.postProduct = this.postProduct.bind(this)
    // this.clearInputBoxes = this.clearInputBoxes.bind(this)
  }

  handleChange(e) {
    // const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    console.log("e", e)
    console.log("e.target", e.target)
    // const name = e.target.name
    if (e.target.name === "price") {
      let priceInt = parseInt(e.target.value)
      this.setState({ [e.target.name]: priceInt })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    console.log("state: ", this.state)
  }

  render() {
    return (
      <div>
        <h3>Form Test</h3>
        {/* <img /> */}
        <div className="input-boxes">
          <input
            name="imgurl"
            placeholder="Image url..."
            onChange={this.handleChange}
          />
          <input
            name="name"
            placeholder="Product name..."
            onChange={this.handleChange}
          />
          <input
            name="price"
            placeholder="Product price..."
            onChange={this.handleChange}
          />
          <div className="form-buttons">
            <button>Cancel</button>
            <button>Add to Inventory</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Form
