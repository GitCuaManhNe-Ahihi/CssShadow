import React,{useContext,useRef} from 'react'
import { AppContext } from '../context/AppProvider'
import classes from './LayerElement.module.css'
export default function LayerElement(props) {
    const { state,dispatch } = useContext(AppContext)
    const { right, down, blur, spread, opacity, color, insert } = props.value
    return (
        <li  id={props.id}  onClick={()=>dispatch({type:'changeId',payload:props.id}) } style={{background:`${state.id == props.id?'#5C6AC4':'white'}`}}
                draggable="true" className={`layer ${classes.containlayer}`} {...props}>
        {`${insert?'Inset':''} ${right}px ${down}px ${blur}px ${spread}px  
            rgba(${parseInt(color.slice(-6, -4), 16) + ',' + parseInt(color.slice(-4, -2), 16) + ',' + parseInt(color.slice(-2), 16)},${opacity/100})`} 
            <button onClick={()=>dispatch({type:'remove'})}>
                xóa
            </button>
        </li>
    )
}
