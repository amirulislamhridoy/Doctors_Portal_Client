import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase.init";
import { signOut } from "firebase/auth";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      fetch(`https://doctors-portal-server-2nd-time.herokuapp.com/booking?patient=${user?.email}`, {
        method: 'GET',
        headers: {
          authorization: 'Bearer ' + localStorage.getItem('accessToken'),
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((res) => {
          if(res.status === 403){
            toast.error("Forbidden error")
            signOut(auth)
            navigate('/login')
            localStorage.removeItem('accessToken')
          }
          return res.json()
        })
        .then((data) => {
          setAppointments(data)
        });

    }
  }, [user]);

  return (
    <div>
      <h2 className="text-3xl font-medium mb-5">My Appointments</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map((a, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
