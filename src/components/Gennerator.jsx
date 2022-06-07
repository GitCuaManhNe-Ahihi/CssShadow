import React, { useContext } from 'react'
import { AppContext } from '../context/AppProvider'
import Input from '../ui/input'
import classes from './Gennerator.module.css'
export default function Gennerator() {
    const { state,dispatch} = useContext(AppContext)
    return (
        <div className={classes.containt}>
            <h1>Box-Shadow CSS Gennerator</h1>
            <div className="row">
                <p>
                    shift right
                </p>
                <Input type="range" value={state.css?.right} onChange={(e) => dispatch({ type: 'change', payload:{ right: e.target.value }})}
                 min={-50} max={50} step={1} />
            </div>
            <div className="row">
                <p>
                    shift down
                </p>
                <Input type="range" value={state.css?.down} onChange={(e) => dispatch(
                    {  type: 'change', payload:{down: e.target.value }}
                )} min={-50} max={50} step={1} />
            </div>
            <div className="row">
                <p>
                    Spread
                </p>
                <Input type="range" value={state.css?.spread} onChange={(e) => dispatch(
                    { type: 'change', payload: {spread:e.target.value }}
                )} min={0} max={100} step={1} />
            </div>
            <div className="row">
                <p>
                    Blur
                </p>
                <Input type="range" value={state.css?.blur} onChange={(e) => dispatch(
                    { type: 'change', payload: {blur: e.target.value }}
                )} min={0} max={100} step={1} />
            </div>
            <div className="row">
                <p>
                    Opacity
                </p>
                <Input type="range"  typeopacity={1} value={state.css?.opacity} onChange={(e) => dispatch(
                    { type: 'change', payload: {opacity: (e.target.value)}}
                )} min={0} max={100} step={10} />
            </div>
            <div className="row insert">
                <Input type="checkbox" value={state.css?.insert} onClick={() => dispatch(
                    { type: 'change', payload: {insert: !state.css?.insert}}
                )}/>
                <p>
                    insert
                </p>
            </div>
            <div className="row">
                <Input type="color" value={state.css?.color} onChange={(e) => dispatch(
                    { type: 'change', payload: {color: (e.target.value)}}
                )}/>

            </div>

        </div>
    )
}
