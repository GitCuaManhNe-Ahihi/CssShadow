import React,{useContext} from 'react'
import { AppContext } from '../context/AppProvider'

export default function Code() {
    const { state } = useContext(AppContext)
    let arr = [...(state.layer === 1 ? state.arr1 : state.arr2)]
    let shadow = ''
    arr.map((item, index) => {
      shadow += `rgba(${parseInt(item.color.slice(-6, -4), 16) + ',' +
        parseInt(item.color.slice(-4, -2), 16) + ',' + parseInt(item.color.slice(-2), 16)},${item.opacity / 100}) ${item.right}px ${item.down}px ${item.blur}px ${item.spread}px ${item.insert ? 'inset' : ''}, `
    })
  return (
    <div style={{ width: '450px', boxShadow:'black 0px 0px 10px' , margin:'10px 20px'}}>Code:
        {
        ' '+shadow.slice(0, -3)+';'
        }
    </div>
  )
}
