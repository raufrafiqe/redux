import React from 'react'
import {useSelector} from "react-redux"

export default function Printstore() {
    const count=useSelector((store)=>{return store})
  return (
    <div>{count}</div>
  )
}