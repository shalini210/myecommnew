import React from 'react'
import { Link } from 'react-router-dom'

export default function Singletoy(props) {
    let to = "ProductDetails/"+props.tname
  return (
    <div>
    <img src={props.timg} />
    <div>{props.tname}</div>
    <div>{props.price}</div>
    <div>{props.discount}</div>
    <Link to={to}>show Details</Link>
    
    </div>
  )
}
