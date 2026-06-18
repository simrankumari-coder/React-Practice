import React from 'react'
import { memo } from 'react'
const Navbar = ({ adjective, handleClick }) => {
    console.log(" it is render again")
    return (
        <div>
            i am {adjective} Navbar

            <button onClick={() => { handleClick() }}>change me {handleClick()}  </button>
        </div>

    )
}

export default memo(Navbar)
