import React from 'react'
import { Counter } from './components/Counter'

export const Title = () => (
  <h1>Introduccion a Unit Testing</h1>
)

const App = () => {
  return (
    <section id='main'>
      <Title />
      <div className='container'>
        <span num={3} active={false}>Primero</span>
        <span num='3' active='false'>Segundo</span>
      </div>
      <input type='text'/>
      <input type='checkbox'/>
      <Counter />
    </section>
  )
}

export default App