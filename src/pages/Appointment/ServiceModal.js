import { format } from "date-fns";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import { toast } from 'react-toastify';

const ServiceModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formateDate = format(date, "PP");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;

    if(slot === 'Please Select'){
      return toast.error('Please Select Slot')
    }
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formateDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value
    };
    
    fetch(`http://localhost:5000/booking`, {
      method: "POST",
      body: JSON.stringify(booking),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if(json.success){
          toast.success(`Appointment is set, ${formateDate} at ${slot}`)
        }else{ 
          toast.error(`Already have an appointment ${formateDate} at ${slot}`)
        }
        setTreatment('')
        refetch()
      });
  };

  return (
    <div>
      <input type="checkbox" id="serviceModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="serviceModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">
            Congratulations random Interner user!
          </h3>

          <form className="text-center" onSubmit={handleFormSubmit}>
            <input
              value={format(date, "PP")}
              disabled
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs my-2"
            />

            <select
              className="select select-bordered w-full max-w-xs my-2"
              name="slot"
            >
              <option disabled defaultValue>
                Please Select
              </option>
              {treatment.slots?.map((slot, index) => (
                <option id={index}>{slot}</option>
              ))}
            </select>

            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName}
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="text"
              name="email"
              disabled
              value={user?.email}
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="number"
              name="phone" required
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs my-2"
            />
            <br />
            <input
              type="submit"
              className="btn btn-accent text-white max-w-xs w-full"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
