import React from 'react'

import { useAppSelector, useAppDispatch } from '../hooks.ts'

import { decrement, increment, incrementByAmount } from './counterSlice.ts'

export function Counter() {
 
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
    </div>
  );
}