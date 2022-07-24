import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../Firebase.init";
import { signOut } from "firebase/auth";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { useQuery } from "react-query";
import Loading from "../Loading/Loading";
import MyAppointmentRow from "./MyAppointmentRow";

const MyAppointments = ({date, setDate}) => {
  const [appointments, setAppointments] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate()
  const formateDate = format(date, "PP")

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?patient=${user?.email}`, {
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
  const { isLoading, data: toDayData } = useQuery(['appointment', date], () =>
     fetch(`http://localhost:5000/bookingSelectDay?patient=${user?.email}&date=${formateDate}`,{
      method: 'GET',
      headers:{
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
     }).then(res =>
       res.json()
     )
   )
   if(isLoading){return <Loading />}

  return (
    <div>
      <header className='flex justify-between items-center'>
        <h2 className="text-3xl font-medium mb-5">My Appointments</h2>
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-outline m-1">{formateDate}</label>
          <div tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box">
            <DayPicker mode="single" selected={date} onSelect={setDate}  />
          </div>
        </div>
      </header>

      <h2 className='text-bold text-2xl'>Selected Date Appointment (For You)</h2>
      <div className="overflow-x-auto mb-8">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {toDayData?.map((a, i) => (
              <MyAppointmentRow a={a} i={i} key={i} ></MyAppointmentRow>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className='text-bold text-2xl'>Total Booked Appointment (For You)</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map((a, i) => (
              <MyAppointmentRow a={a} i={i} key={i}></MyAppointmentRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
