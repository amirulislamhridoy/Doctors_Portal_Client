import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, i, refetch }) => {
  const makeAdmin = (user) => {
    fetch(`http://localhost:5000/user/admin/${user?.email}`, {
      method: "PUT",
      body: JSON.stringify(),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authorization: "Bearer " + localStorage.getItem('accessToken')
      },
    })
      .then((res) => {
        if(res.status === 403){
            toast.error('Sorry you are not a admin')
        }
        return res.json()
      })
      .then((data) => {
        if(data.modifiedCount){
            toast.success(user?.email + ' is admin now')
            refetch()
        }
      });
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{user.email}</td>
      <td>
        {user.role === "admin" || <button className="btn btn-xs btn-outline" onClick={() => makeAdmin(user)}>
          Make Admin
        </button>}
      </td>
      <td>
        <button className="btn btn-xs btn-outline">Remove User</button>
      </td>
    </tr>
  );
};

export default UserRow;
