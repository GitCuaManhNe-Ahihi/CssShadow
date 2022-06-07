import React, { useContext } from 'react'
import { AppContext } from '../context/AppProvider'
import LayerElement from './LayerElement'

export default function Layer() {
  const { state,dispatch } = useContext(AppContext)
  let arr = (state.layer === 1 ? [...state.arr1] : [...state.arr2])
  return (
    <div style={{maxHeight:'400px',boxShadow:'black 0px 0px 10px '}}>
      <button onClick={() =>dispatch({ type: 'add' })}>Add layer</button>
      {
        arr.map((item, index) => {
          return (
            <LayerElement key={index} id={index} {...item} />
          )
        })}
    </div>
  )
}
