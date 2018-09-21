import React from "react"
import "./Product.css"
import { Link } from "react-router-dom"

export default function Product(props) {
  console.log(props)
  return (
    <div className="whole-product">
      <img className="product-img" src={props.img} alt="" />
      <div className="right-side">
        <div className="product-text">
          <h5 className="product-name">Product: {props.name}</h5>
          <h5 className="product-price">${props.price}</h5>
        </div>
        <div className="product-buttons">
          <div
            onClick={() => props.deleteProduct(props.id)}
            className="prod-button"
          >
            Delete
          </div>
          <Link to={`/edit/${props.id}`}>
            <div className="prod-button">Edit</div>
          </Link>
        </div>
      </div>
    </div>
  )
}
