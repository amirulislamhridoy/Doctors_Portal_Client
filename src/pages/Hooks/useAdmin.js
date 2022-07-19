import { useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const email = user?.email
    if(email){
        fetch(`http://localhost:5000/admin/${email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    }
    return [admin]
}

export default useAdmin;