import React from 'react'
import classes from './Input.module.css'


export default function InputValue(props) {
    const blur = props.typeopacity ? 100 : 1
    
    
    return (
        <>{props.type == 'range' ?
            <div className={classes.input}>
                <span className={classes.show} style={{ left: `${props.max == 50 ? (+props.value + 50) * 0.94 : props.value * 0.94}%` }} >
                    {props.max == 50 ? +props.value + 50 : (+props.value/blur)}</span>
                <div className={classes.process} style={{ width: `${props.max == 50 ? (+props.value + 50) : props.value}%` }}></div>
                <input value={props.value} className={classes.slider} {...props} />
            </div>
            :
            <input className={props.type == 'checkbox' ? classes.checkbox : classes.color} value={props.value} {...props} />}</>
    )
}
