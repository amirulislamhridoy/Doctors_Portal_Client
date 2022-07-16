import React from 'react';

const GetStartedButton = ({children}) => {
    return (
        <button className='btn border-0 text-white bg-gradient-to-r from-secondary to-primary'>
            {children}
        </button>
    );
};

export default GetStartedButton;