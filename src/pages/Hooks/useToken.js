import { useEffect } from "react";
import { useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  const email = user?.user?.email;
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/user/${email}`, {
        method: "PUT",
        body: JSON.stringify({email: email}),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
            setToken(json.token)
            localStorage.setItem('accessToken', json.token)
        });
    }
  }, [user]);
  return [token, setToken]
};


export default useToken