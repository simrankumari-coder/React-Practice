import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, multiply } from './redux/counter/counterSlice'
import Navbar from './components/Navbar'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <button onClick={() => { dispatch(decrement()) }}>-</button>
        Currently count is {count}
        <button onClick={() => { dispatch(increment()) }}>+</button>
        <button onClick={() => { dispatch(multiply()) }}>*</button>
        <Navbar />
      </div>
    </>
  )
}

export default App
