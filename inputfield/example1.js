import { useState } from "react";

export default function exampleOne () {
    const [name, setName] = useState("Name Here");

    return (
        <>
        <input
            value = {name}
            onChange ={ e => setName(e.target.value)}
        />
        <p>Hello, {name}</p>
        </>
    )
}