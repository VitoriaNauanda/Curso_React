import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Mateus", "Pedro", "Josias", "Maria"]);
    const [users] = useState([
        {id: 1, name: "Mateus", age: 31},
        {id: 2785646, name: "João", age: 28},
        {id: 84521, name: "Pedro", age: 44},
    ])
    return(
        <div>
            <ul> 
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
        </div>
    )
}
export default ListRender 