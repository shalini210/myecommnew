import React, { useEffect, useState } from 'react'
import cdata from './categorydata';
export default function Allcategories() {
  const [data,setdata]=useState();
  const arr= [{"name":"A"},{"name":"B"},{"name":"C"}]
  const [arrayfordata,setarrayfordata]=useState(cdata);
  useEffect(()=>
  {
      var d = arrayfordata.map((category)=>
      {
        return <div className='category'>
         <a href={'/Category/'+category.name}>{category.name}</a>
         </div>
       })
    console.log("use effect called")
    console.log(d)
    setdata(d)
     },[arrayfordata]);
  return (
    <div>Allcategories
      {data}
      <input type="button" value="change categories"
       onClick={()=>setarrayfordata(arr)}></input>
    </div>
    
  )
}
