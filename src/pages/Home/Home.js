import React from 'react';
import MakeAppointment from './Appointment';
import Banner from './Banner';
import ContactUs from './ContactUs';
import ExceptionalDental from './ExceptionalDental';
import Info from './Info';
import OurServices from './OurServices';
import Testimonial from './Testimonial';
import Footer from '../Shared/Footer'

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Info></Info>
            <OurServices></OurServices>
            <ExceptionalDental></ExceptionalDental>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </main>
    );
};

export default Home;