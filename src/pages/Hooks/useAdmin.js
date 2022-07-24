import { useState } from "react"

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false)
    const [adminLoading, setAdminLoading] = useState(true)
    const email = user?.email
    if(email){
        fetch(`https://doctors-portal-server-2nd-time.herokuapp.com/admin/${email}`)
        .then(res => res.json())
        .then(data => {
            setAdmin(data.admin)
            setAdminLoading(false)
        })
    }
    return [admin, adminLoading]
}

export default useAdmin;