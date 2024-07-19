import React, { useState } from 'react'
import Post from './Post';

export default function AllPosts() {
   const [postdata,setpostdata] = useState();
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json =>{
        var posts= json;
        console.log(json)
    let postdata1 = posts.map((p)=><Post t={p.title}></Post>)
    setpostdata(postdata1)
    });
  return (
    <div>AllPosts
        <br>
        </br>
        {postdata}
    </div>
  )
}
