import React from "react"

export default function Product(props) {
  console.log(props)
  return (
    <div>
      <img src={props.img} alt="" />
      <div className="product-text">
        <h5>Product: {props.name}</h5>
        <h5>${props.price}</h5>
      </div>
    </div>
  )
}
