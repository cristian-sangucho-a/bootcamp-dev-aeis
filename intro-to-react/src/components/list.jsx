import { useState } from "react"

export function List() {
    const [todos, settodos] = useState([])
    const [inputvalue, setinputvalue] = useState("")

    const handleClick = () => {
        settodos([...todos, inputvalue])
    }
    return (
        <div>
            <ul>
                {
                    todos.map((todo, index) => (
                        <li style={{ textAlign: "left" }} key={index} >{index}. {todo}</li>
                    ))
                }
            </ul>
            <input type="text" onChange={(event) => {
                setinputvalue(event.target.value)
            }}/>
            <button onClick={handleClick}>Add to do</button>
        </div>
    )
}
