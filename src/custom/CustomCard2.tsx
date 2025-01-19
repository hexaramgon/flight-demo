import React from 'react';
import './customcard.css';

const CustomCard2 = ({ name, location, hours, number }) => {
  return (
    <div className='contact-panel'>
        <h5>{name}</h5>
        <div className='text-row'>
            <div className='left-half'>
                
                Location:</div>
            <span>{location}</span>
        </div>
        <div className='text-row'>
            <div className='left-half'>Working Hours:</div>
            <span>{hours}</span>
        </div>        
        <div className='text-row'>
            <div className='left-half'>Contact:</div>
            <span>{number}</span>
        </div>          
        <hr></hr>
    </div>
  );
};

export default CustomCard2;
