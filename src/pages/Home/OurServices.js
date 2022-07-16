import React from 'react';
import service1 from '../../assets/images/fluoride.png'
import service2 from '../../assets/images/cavity.png'
import service3 from '../../assets/images/whitening.png'
import Service from './Service';

const OurServices = () => {
    const services = [
        {
            _id: '1',
            img: service1,  
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the '
        },
        {
            _id: '2',
            img: service2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the '
        },
        {
            _id: '3',
            img: service3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the '
        },
    ]
    return (
        <section className='m-5 mt-20'>
            <p className='text-center ext-sm text-secondary font-medium'>OUR SERVICES</p>
            <h2 className='text-center text-3xl'>Services We Provide</h2>

            <div className='flex flex-wrap gap-5 mt-20 justify-between'>
            {services.map(service => <Service service={service} key={service._id}></Service>)}
            </div>
        </section>
    );
};

export default OurServices;