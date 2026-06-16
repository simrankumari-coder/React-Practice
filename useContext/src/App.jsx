import { useState } from 'react'
import Navbar from './without useContext/Navbar'
import { counterContext } from './components/Usecontext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <counterContext.Provider value={count}>
        <Navbar count={count} />
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>

      </counterContext.Provider>

    </>
  )
}

export default App
