import React from "react"
import "./Product.css"

export default function Product(props) {
  console.log(props)
  return (
    <div className="whole-product">
      <img className="product-img" src={props.img} alt="" />
      <div className="product-text">
        <h5 className="product-name">Product: {props.name}</h5>
        <h5 className="product-price">${props.price}</h5>
      </div>
    </div>
  )
}
