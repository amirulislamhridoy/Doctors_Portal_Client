import { format } from "date-fns";
import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import img from "../../assets/images/chair.png";
import bg from '../../assets/images/bg.png'

const AppointmentBanner = ({date, setDate}) => {
  
  return (
    <section className="hero min-h-screen " style={{backgroundImage: `url("${bg}")`}}>
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <img src={img} alt="" className="max-w-xl rounded-lg  shadow-2xl mx-auto" />

        <div className='mr-10'>
          <DayPicker mode="single" selected={date} onSelect={setDate}  />
          {/* <p>You have selected {format(date, "PP")}</p> */}
        </div>
      </div>
    </section>
  );
};

export default AppointmentBanner;
