import { useState } from "react";


export default function exampleTwo() {
    const [number, setNumber] = useState(0)

    return (
        <div className="gap">
            <button onClick={() => setNumber(number + 1)}>Increment</button>
            <button onClick={() => setNumber(number - 1)}>Decrement</button>
            {number}
        </div>
    )
}