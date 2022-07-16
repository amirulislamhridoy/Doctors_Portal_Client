import React from "react";

const InfoCard = ({ icon, heading, p, ourStyle }) => {
  return (
    <div className={`card lg:card-side text-white pl-8 ${ourStyle}`}>
      <figure>
        <img className="mr-4 mt-6 lg:mt-0" src={icon} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl mb-2">{heading}</h2>
        <p>{p}</p>
      </div>
    </div>
  );
};

export default InfoCard;
