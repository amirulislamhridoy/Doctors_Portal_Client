import React from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailAbleAppointment from './AvailAbleAppointment';

const Appointment = ({date, setDate}) => {
    return (
        <main>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailAbleAppointment date={date}></AvailAbleAppointment>
            <Footer></Footer>
        </main>
    );
};

export default Appointment;