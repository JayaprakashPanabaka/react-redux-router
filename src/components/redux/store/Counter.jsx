import React from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from './actions';

const Counter = () => {
    const count = useSelector((state) => {
         return state;
    });

    const dispatcher = useDispatch()

    const handleIncrement = () => {
      return dispatcher(increment())
    }

    const handleDecrement = () => {
      return dispatcher(decrement())
    }

    const handleReset = () => {
      return dispatcher(reset())
    }

   

  return (
    <div>
      <h1>Counter</h1>
      <h1>{count}</h1>
      <div>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>
    </div>
  )
}

export default Counter




// list_a = [1,2,3,3,4,5,5,5,6,7,4,7,8]
// output: [1,2,6,8]
