import React, { useState } from "react";

export default function Counter() {
    const [count, setcount] = useState(0);
    const increment = () => {
        setcount(prev => prev + 1)
        setcount(prev => prev + 1)
        setcount(prev => prev + 1)
    }
    const decrement = () => {
        setcount(prev => prev - 1)
        setcount(prev => prev - 1)
        setcount(prev => prev - 1)
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
