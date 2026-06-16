import React, { createContext } from 'react'
import { useContext } from 'react'
import { counterContext } from '../components/Usecontext'
const Component1 = () => {
    const Counter = useContext(counterContext)
    return (
        <div>
            i am component 1
            {Counter}
        </div>
    )
}

export default Component1
