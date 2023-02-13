import { useState } from "react";

export default function exampleOne () {
    const [name, setName] = useState("");

    return (
        <>
        <input
            value = {name}
            onChange ={ e => setName(e.target.value)}
            placeholder="Your First Name"
        />
        <p>Hello, {name}</p>
        </>
    )
}