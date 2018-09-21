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
          <div>Product: {props.name}</div>
          <div>${props.price}</div>
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
