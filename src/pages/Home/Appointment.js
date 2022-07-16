import React from 'react';
import img from '../../assets/images/doctor-small.png'
import GetStartedButton from '../Shared/GetStartedButton';
import bg from '../../assets/images/appointment.png'

const  MakeAppointment = () => {
    return (
        <section className='flex items-center justify-center mt-20 lg:mt-48' style={{backgroundImage: `url("${bg}")`, maxHeight: '533px'}}>
            <img style={{maxWidth: '606px'}} className='flex-1 mt-[-103px] hidden lg:block' src={img} alt='' />
            <div className='text-white flex-1 my-10 mx-5'>
                <p className='text-xl text-secondary text-bold mb-6'>Appointment</p>
                <h2 className='text-4xl mb-6'>Make an Appointment Today</h2>
                <p className='mb-6'>It is a long fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using OLorem Ipsumis that it has a more-or-less normal distribution of letters, ass opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <GetStartedButton>Get Started</GetStartedButton>
            </div>
        </section>
    );
};

export default MakeAppointment;