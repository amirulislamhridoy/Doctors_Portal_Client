import React from 'react';

const Review = ({review}) => {
    const {name, location, description, img} = review
    return (
        <div className="card bg-base-100 shadow-xl my-5">
          <div className="card-body">
            <p className="mb-6 font-medium">{description}</p>
          </div>
          <div className="flex items-center px-5 mb-5">
            <div style={{width: '75px'}} className="avatar ml-4 mb-2">
              <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src={img} alt="" />
              </div>
            </div>
            <div className="ml-4">
              <h4 className="font-bold">{name}</h4>
              <p>{location}</p>
            </div>
          </div>
        </div>
    );
};

export default Review;