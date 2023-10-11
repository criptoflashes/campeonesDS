/* 
"use client";
import {useRouter} from 'next/navigation'


//recordar que este componente se está renderizando en el servidor
function Users({users}) {
    const router = useRouter()
    return (
        <div>
            <ul>
                {users.map((e) => (
                    <li key={e.id} onClick={() => router.push(`/users/${e.id}`)}>
                        <div>
                            <h5>{e.id} {e.first_name} {e.last_name}</h5>
                            <img src={e.avatar}></img>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users
 */