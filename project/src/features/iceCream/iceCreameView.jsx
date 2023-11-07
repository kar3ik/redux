import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreameSlice'

const iceCreameView = () => {
  const numoficeCreams = useSelector((state) => state.iceCream.numofIceCreams)
  const dispatch = useDispatch()

  return (
    <div>
        <h1>no of icecreams - {numoficeCreams} </h1>
        <button onClick={()=> dispatch(ordered())}>ordered  icecreams </button>
        <button onClick={()=> dispatch(restocked(2))}>restocked icecreams </button>
    </div>
    
  )
}

export default iceCreameView