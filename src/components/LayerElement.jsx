import React,{useContext} from 'react'
import { AppContext } from '../context/AppProvider'

export default function LayerElement(props) {
    const { dispatch } = useContext(AppContext)
    return (
        <div onClick={()=>dispatch({type:'changeId',payload:props.id}) } style={{width:"100%",height:"30px",display:'flex',
        margin: '10px 0',
        justifyContent:'space-between',alignItems:'center',background:"#5C6AC4"}}>
            <p>{`${props.insert?'Inset':''} ${props.right}px ${props.down}px ${props.blur}px ${props.spread}px  
            rgba(${parseInt(props.color.slice(-6, -4), 16) + ',' + parseInt(props.color.slice(-4, -2), 16) + ',' + parseInt(props.color.slice(-2), 16)},${props.opacity/100})`}</p>
            <button onClick={()=>dispatch({type:'remove'})}>
                xóa
            </button>
        </div>
    )
}
