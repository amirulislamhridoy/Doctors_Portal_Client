import React from "react";
import bg from '../../assets/images/appointment.png'

const ContactUs = () => {
  return (
    <section className='py-16' style={{backgroundImage: `url("${bg}")`}}>
      <p className="text-xl font-bold text-secondary mt-5 text-center">Contact us</p>
      <h2 className="text-3xl text-white text-center">Stay connected with us</h2>
      
      <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl mx-auto">
      <div className="card-body">
        <div className="form-control">
          <input type="text" placeholder="Email Address" className="input input-bordered" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Subject" className="input input-bordered" />
        </div>
        <div className="form-control">
          <textarea type="text" placeholder="Your message" className="input input-bordered h-28" />
        </div>
        <div className="form-control mt-6">
          <button className="btn w-24 bg-gradient-to-r from-secondary to-primary border-0 mx-auto text-white capitalize">Submit</button>
        </div>
      </div>
    </form>
    </section>
  );
};

export default ContactUs;
