import React from 'react';
import sleeping from '../../../images/404.jpg'
const NotFound = () => {
    return (
        <div >
            <h2 className='text-primary text-center'>Sorry Page Not Found </h2>
            <h2 className='text-danger text-center'>I am Sleeping </h2>
           <img className='w-100' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;