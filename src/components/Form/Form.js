import React, { Component } from "react"
import axios from "axios"
import "./Form.css"

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      price: "",
      imgurl: "",
      edit: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.postProduct = this.postProduct.bind(this)
    this.updateProduct = this.updateProduct.bind(this)
    this.clearInputBoxes = this.clearInputBoxes.bind(this)
  }

  handleChange(e) {
    // const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    console.log("e", e)
    console.log("e.target", e.target)
    // const name = e.target.name
    if (e.target.name === "price") {
      let priceInt = parseFloat(e.target.value) //.toFixed(2)
      this.setState({ [e.target.name]: priceInt })
    } else {
      this.setState({
        [e.target.name]: e.target.value
      })
    }
    console.log("state: ", this.state)
  }

  postProduct() {
    axios
      .post("/api/product", {
        name: this.state.name,
        price: this.state.price,
        img: this.state.imgurl
      })
      .then((res) => {
        console.log("res", res)
        this.clearInputBoxes()
        // this.props.getInv()
      })
  }

  updateProduct() {
    axios
      .put(`/api/product/${this.props.match.params.id}`, {
        name: this.state.name,
        price: this.state.price,
        img: this.state.imgurl
      })
      .then((res) => {
        console.log(res)
        this.clearInputBoxes()
      })
  }

  clearInputBoxes() {
    this.setState({
      name: "",
      price: "",
      imgurl: "",
      edit: false
    })
  }

  componentDidMount() {
    if (this.props.match.params.id) {
      console.log(this.props.match.params.id)
      axios.get(`/api/product/${this.props.match.params.id}`).then((res) => {
        console.log(res)
        this.setState({
          name: res.data[0].name,
          price: res.data[0].price,
          imgurl: res.data[0].img,
          edit: true
        })
      })
    } else {
      this.clearInputBoxes()
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.clearInputBoxes()
    }
  }

  render() {
    return (
      <div className="whole-form">
        <img
          className="form-img"
          src={this.state.imgurl}
          alt=""
          onError={(e) => {
            e.target.src =
              "https://www.biber.com/dta/themes/biber/core/assets/images/no-featured-175.jpg"

            //when this.state.imgurl doesn't lead to an img, it uses the url above
          }}
        />
        <div className="input-boxes">
          <div>Image Url: </div>
          <input
            name="imgurl"
            placeholder="Image url..."
            onChange={this.handleChange}
            value={this.state.imgurl}
          />{" "}
          <div>Product Name: </div>
          <input
            name="name"
            placeholder="Product name..."
            onChange={this.handleChange}
            value={this.state.name}
          />
          <div>Price: </div>
          <input
            name="price"
            placeholder="Product price..."
            onChange={this.handleChange}
            value={this.state.price}
          />
        </div>
        <div className="form-buttons">
          <button onClick={this.clearInputBoxes}>Cancel</button>
          {this.state.edit ? (
            <button onClick={this.updateProduct}> Save Changes </button>
          ) : (
            <button onClick={this.postProduct}>Add to Inventory</button>
          )}
        </div>
      </div>
    )
  }
}

export default Form
