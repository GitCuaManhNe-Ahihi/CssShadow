import React, { useContext, useEffect, useState, useRef } from 'react'
import { AppContext } from '../context/AppProvider'
import LayerElement from './LayerElement'

export default function Layer() {
  const { state, dispatch } = useContext(AppContext)
  const [arr, setArr] = useState(state.layer === 1 ? state.arr1 : state.arr2)
  useEffect(() => {
    setArr(state.layer === 1 ? state.arr1 : state.arr2)
  }, [state])
  const start = useRef(null)
  const postion = useRef(null)
  const OnDragStart = (e) => {
    start.current = e.target.id
    postion.current = e.clientY
  }
  const OnDragEnter = (e) => {
    e.preventDefault()
    e.target.style.border = '1px solid #000'
    const data = { ...arr[start.current] }
    if (e.target.id === start.current) {
      return
    }
    if (e.target.id > start.current) {
      let data2 = arr[+start.current + 1]
      setArr([...arr.slice(0, start.current), data2, data, ...arr.slice(+start.current + 2, arr.length)])
    }
    else {
      let data2 = arr[+start.current - 1]
      setArr([...arr.slice(0, start.current - 1), data, data2, ...arr.slice(+start.current + 1, arr.length)])
    }
  }
  const OnDragLeave = (e) => {
    e.preventDefault()
    e.target.style.border = 'none'

  }
  const OnDragEnd = (e) => {
    console.log(e.target.id-1,+start.current)
    if (postion.current > e.clientY) {
      dispatch({ type: 'move', payload: { arr, id: +start.current-1} })
    } else {
      dispatch({ type: 'move', payload: { arr, id: +start.current + 1 } })
    }
  }
  return (
    <div>
      <button onClick={() => dispatch({ type: 'add' })}>Add layer</button>
      <ul id='containlayer' style={{ display: 'block', maxHeight: '400px', boxShadow: 'black 0px 0px 10px ' }}>
        {
          arr.map((item, index) => {
            return (
              <LayerElement key={index} id={index} value={{ ...item }} onDragStart={OnDragStart} onDragEnter={OnDragEnter} onDragLeave={OnDragLeave} onDragEnd={OnDragEnd}></LayerElement>

            )
          })}
      </ul>
    </div>
  )
}
