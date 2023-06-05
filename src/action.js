import React from 'react'
import {useDispatch} from "react-redux"

export default function Actions() {
    const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>{dispatch({type:"inc",payload:"i am going to increment"})}}>+</button>
        <button onClick={()=>{dispatch({type:"dec",payload:"i am going to decrenmnt"})}}>-</button>
        <button onClick={()=>{dispatch({type:"set",payload:"i am going to reset"})}}>Reset</button>

    </div>
  )
}
