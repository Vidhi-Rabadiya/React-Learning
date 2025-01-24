import { useState } from "react"

const User = ({ name, location, contact }) => {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(2)
    return <div className="userContainer">
        <h3>Name: {name}</h3>
        <h3>Location: {location}</h3>
        <h3>Contact: {contact}</h3>
    </div>
}

export default User