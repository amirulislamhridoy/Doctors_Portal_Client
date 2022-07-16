import React from 'react';
import icon1 from '../../assets/icons/clock.svg'
import icon2 from '../../assets/icons/marker.svg'
import icon3 from '../../assets/icons/phone.svg'
import InfoCard from './InfoItem';

const Info = () => { 
    return (
        <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 lg:mt-0  m-5'>
            <InfoCard 
            icon={icon1} heading={'Opening Hours'} 
            p={"Lorem Ipsum is simply dummy text of the pri"}
            ourStyle={'bg-gradient-to-r from-secondary to-primary'}
            ></InfoCard>
            <InfoCard
            icon={icon2} heading={'Visit out location'} 
            p={"Brooklyn, Ny 10036, United States"}
            ourStyle={'bg-accent'}
            ></InfoCard>
            <InfoCard 
            icon={icon3} heading={'Contact us now'}
            p={"+000 123 456789"}
            ourStyle={'bg-gradient-to-r from-secondary to-primary'}
            ></InfoCard>
        </section>
    );
};

export default Info;