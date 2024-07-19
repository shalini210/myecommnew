import React from 'react'
import { Link } from 'react-router-dom'
import demo from "../images/demo.jfif"
export default function Kids() {
  return (
    <div><h1>Kids collections</h1>
    <div>
        <img src={demo} ></img>
        <h3>Clothes</h3>
        <Link to="/kidsclothes">View more</Link>        
        
    </div>
    <div>
        <img src={demo} ></img>
        <h3>Toys</h3>
        <Link to="/KidsToys">View more</Link>        
        
    </div>
    <div>
        <img src={demo} ></img>
        <h3>Baby Gears</h3>
        <Link to="/BabyGear">View more</Link>        
        
    </div>
          </div>
    
  )
}
