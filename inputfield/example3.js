import { useState } from "react";

export default function exampleOne() {
    const [name, setName] = useState("");
    const placeholderText = "Your First Name"

    return (
        <>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
                placeholder={placeholderText}
            />
            {
                name.length > 2 ? <p> Hello, {name}</p> : <></>
            }
        </>
    )
}