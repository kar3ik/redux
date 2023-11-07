import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered,restocked } from './cakeSlice'

const cakeView = () => {
  const numofCakes = useSelector((state) => state.cake.numofCakes)
  const dispatch = useDispatch()
  return (
    <div>
        <h1>no of cakes - {numofCakes} </h1>
        <button onClick={()=> dispatch(ordered())}>ordered  cakes </button>
        <button onClick={()=> dispatch(restocked(5))}> restocked cakes</button>
    </div>
    
  )
}

export default cakeView