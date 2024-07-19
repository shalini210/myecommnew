import React from 'react'
import { useParams } from 'react-router-dom';

export default function ToysDescription() {
  const {pid} = useParams();
  console.log(pid)
    return (
    <div>ToysDescription : {pid}</div>
  )
}
