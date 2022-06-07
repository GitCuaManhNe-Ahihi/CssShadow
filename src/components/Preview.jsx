import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppProvider'
import Input from '../ui/input'

export default function Preview() {
  const { state } = useContext(AppContext)
  const [background, setBackground] = useState('#3D9DF6')
  const [underground, setUnderground] = useState('#e4dcdc')
  let arr = [...(state.layer === 1 ? state.arr1 : state.arr2)]
  let shadow = ''
  arr.map((item, index) => {
    shadow += `rgba(${parseInt(item.color.slice(-6, -4), 16) + ',' +
      parseInt(item.color.slice(-4, -2), 16) + ',' + parseInt(item.color.slice(-2), 16)},${item.opacity / 100}) ${item.right}px ${item.down}px ${item.blur}px ${item.spread}px ${item.insert ? 'inset' : ''}, `
  })

  return (
    <div style={{ width: '450px', height: '400px', background: underground , margin:'10px 20px'}}>
      <Input type="color" value={underground} onChange={(e) => setUnderground(e.target.value)} />
      <Input type="color" value={background} onChange={(e) => setBackground(e.target.value)} />

      {state.layer === 1 ? <div className='shape' style={{ width: '200px', height: '200px', background: background,margin:'40px'}}>
        <div style={{ width: '200px', height: '200px', boxShadow:shadow.slice(0, -3)}}></div>
      </div> :
        <div className='shape2' style={{ width: '200px', height: '200px', background: background,margin:'40px' }}>
          <div style={{ width: '200px', height: '200px', boxShadow:shadow.slice(0, -3) }}></div>
        </div>}
    </div>
  )
}
