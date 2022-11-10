import React from 'react'
import * as actions from "../redux/action/EvenCounterAction"
import { useSelector, useDispatch } from "react-redux";


const EvenCounter = () => {
const evenCount = useSelector(state => state.evenCounter)
const dispatch = useDispatch()

  const evenIncreaseCounter = () => {
    dispatch(actions.evenIncreaseCount())
   }


  const evenDecreaseCounter = () => {
   dispatch(actions.evenDecreaseCount())
    
  }


  return (
    <div>
      <h2>Even Counter :: {evenCount} </h2>
      
      <button style={{margin:10, padding:5, fontSize:20}} onClick={evenIncreaseCounter}>+</button>
      <button style={{margin:10, padding:5,fontSize:20}} onClick={evenDecreaseCounter}>-</button>
    </div>
  )
}

export default EvenCounter