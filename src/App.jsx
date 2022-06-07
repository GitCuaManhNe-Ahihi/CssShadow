import { useState } from 'react'
import './App.css'
import Code from './components/Code'
import Gennerator from './components/Gennerator'
import Layer from './components/Layer'
import Preview from './components/Preview'
import Template from './components/Template'
import Input from './ui/Input'
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelectorAll('input')
  const span =document.querySelectorAll('span')
  for (let i = 0; i < input.length -2; i++) {
      input[i].addEventListener('mousedown', (e) => {
         span[i].style.display = 'block'
      })
  }
  for (let i = 0; i < input.length -2; i++) {
      input[i].addEventListener('mouseleave', (e) => {
         span[i].style.display = 'none'
      })
  }
})

function App() {

  return (
    <div className="App">
     <div className='left'>
       <Gennerator>
       </Gennerator>
       <Layer></Layer>
     </div>
     <div className='right'>
       <Preview></Preview>
       <Code></Code>
       <Template></Template>
     </div>
    </div>
  )
}

export default App
