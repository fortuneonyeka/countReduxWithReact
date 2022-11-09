import React from 'react'
import * as actions from "../redux/action/EvenCounterAction"


const EvenCounter = ({store}) => {


  const evenIncreaseCounter = () => {
    store.dispatch(actions.evenIncreaseCount())
    
   }


  const evenDecreaseCounter = () => {
    store.dispatch(actions.evenDecreaseCount())
    
  }


  return (
    <div>
      <h2>Even Counter :: {store.getState().evenCounter} </h2>
      
      <button style={{margin:10, padding:5, fontSize:20}} onClick={evenIncreaseCounter}>+</button>
      <button style={{margin:10, padding:5,fontSize:20}} onClick={evenDecreaseCounter}>-</button>
    </div>
  )
}

export default EvenCounter