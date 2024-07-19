import React from 'react'
import { useParams } from 'react-router-dom'

export default function Category() {
    const {cname} =useParams();
    return (
    
    <div>Category : {cname}</div>
  )
}
