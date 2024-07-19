import React from 'react'

import Singletoy from './Singletoy'
import alltoysdata from './toysdata.js'
export default function Toys() {
    let alltoys=alltoysdata
let toys1 = alltoys.map((toy)=><Singletoy tname={toy.name} timg={toy.timg}
price={toy.price} discount={toy.discount}></Singletoy>) 

  return (
    <div>
   <h1>
        Toys</h1>
         <div className='productContainer'>
        <br></br>
        {toys1}
        </div>
        </div>
  )
}
