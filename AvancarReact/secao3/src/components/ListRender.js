import { useState, setUsers } from "react"

const ListRender = () => {
    //Menos indicado //
    const [list] = useState(["Mateus", "Pedro", "Josias", "Maria"]);
    //Mais indicado //
    const [users] = useState([
        {id: 1, name: "Mateus", age: 31},
        {id: 2, name: "João", age: 28},
        {id: 3, name: "Pedro", age: 44},
    ])
    const deleteRandon = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        setUsers((prevUsers)=>{
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        })
    }
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
            <button onClick ={(deleteRandon) }
            > Delete random user</button>
        </div>
    )
}
export default ListRender 