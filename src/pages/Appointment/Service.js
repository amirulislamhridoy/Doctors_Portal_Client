import React from "react";

const Service = ({ service, setTreatment }) => {
    const {name, slots, price} = service
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body items-center">
        <h2 className="card-title text-secondary ">{name}</h2>
        <p>
          {slots.length === 0 ? (
            <span className='text-red-500'>Try another day.</span>
          ) : (
            <span>{slots[0]}</span>
          )}
        </p>
        <p>{slots.length} spaces available</p>
        <p>Price: $ {price}</p>
        <label
        disabled={slots.length === 0}
          onClick={() => setTreatment(service)}
          htmlFor="serviceModal"
          className="btn btn-sm modal-button bg-gradient-to-r from-secondary to-primary text-white"
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default Service;
