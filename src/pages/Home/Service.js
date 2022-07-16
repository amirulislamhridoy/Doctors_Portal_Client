import React from "react";

const Service = ({ service }) => {
  return (
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img
            src={service.img}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="text-xl font-semibold text-center">{service.name}</h2>
          <p className='text-center'>{service.description}</p>
        </div>
    </div>
  );
};

export default Service;
