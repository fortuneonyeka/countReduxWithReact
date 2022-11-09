import React from 'react'


import * as actions from "../redux/action/CountActions"

const Counter = ({store}) => {

console.log(store.getState());
  const increaseCounter = () => {
   store.dispatch(actions.increaseCount())
  }
 
  const decreaseCounter = () => {
    store.dispatch(actions.decreaseCount())
  }
  
  

    return (
    <div>
      <h2>Counter :: {store.getState().counter}</h2>
      
      <button style={{margin:10, padding:5, fontSize:20}} onClick={increaseCounter}>+</button>
      <button style={{margin:10, padding:5,fontSize:20}} onClick={decreaseCounter}>-</button>
    
    </div>
    
  )
}

export default Counter