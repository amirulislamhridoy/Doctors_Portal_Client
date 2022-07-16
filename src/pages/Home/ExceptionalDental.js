import React from 'react';
import GetStartedButton from '../Shared/GetStartedButton';
import img from '../../assets/images/treatment.png'

const ExceptionalDental = () => {
    return (
        <section className='lg:flex mt-20 lg:mt-40 items-center justify-center m-5'>
            <img className='lg:w-6/12 rounded-lg lg:mr-28 lg:ml-32 mx-auto' style={{maxWidth: '428px'}} src={img} alt='' />

            <div className='lg:w-6/12'>
                <h2 className=' text-5xl font-bold mb-7 mt-7 lg:mt-0'>Exceptional Dental Care, on Your Terms</h2>
                <p className='text-base mb-7 lg:mb-11'>It is  a long established fact that a render will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsums that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here,, making it look like readable English. Many desktop publishing packages and web page.</p>
                <GetStartedButton>Get Started</GetStartedButton>
            </div>
        </section>
    );
};

export default ExceptionalDental;