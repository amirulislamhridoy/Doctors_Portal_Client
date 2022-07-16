import React from "react";
import chair from '../../assets/images/chair.png'
import GetStartedButton from "../Shared/GetStartedButton";
import bg from '../../assets/images/bg.png'

const Banner = () => {
  return (
      <section className="hero lg:min-h-screen" style={{backgroundImage: `url('${bg}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt=''
            className="lg:w-6/12 mb-10 rounded-lg shadow-2xl"
          />
          <div className='lg:w-6/12'>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the
            </p>
            <GetStartedButton>Get Started</GetStartedButton>
          </div>
        </div>
      </section>
  );
};

export default Banner;
