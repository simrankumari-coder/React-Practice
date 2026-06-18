import React from 'react'
import { useMemo, useState } from 'react'
const Example = () => {
    const [count, setcount] = useState(0)
    const [num, setNum] = useState(() => {
        return new Array(30_00_000).fill(0).map((_, i) => {
            return {
                index: i,
                isMagicall: i === 29_00_000
            }
        })
    })
    const magical = useMemo(() => num.find(item => item.isMagicall === true), [num])
    return (
        <div>
            <span>Magical number is {magical.index}</span>
            <button onClick={() => {
                setcount(count + 1)
                if (count == 10) {
                    setNum(new Array(10_00_000).fill(0).map((_, i) => {
                        return {
                            index: i,
                            isMagicall: i === 9_00_000
                        }
                    }))
                }

            }}>The count is {count} </button>
        </div>
    )
}

export default Example
