import React from "react";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import UserRow from "./UserRow";

const Users = () => {
  const { isLoading, error, data, refetch } = useQuery("users", () =>
    fetch("http://localhost:5000/users").then((res) => res.json())
  );
  if(isLoading){
    <Loading />
  }
  return (
    <div>
      <h2 className="text-3xl font-medium mb-5">Users</h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>User</th>
              <th>Make Admin</th>
              <th>Remove From List</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user,i) => <UserRow user={user} refetch={refetch} key={user._id} i={i}></UserRow>)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
