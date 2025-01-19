import React from 'react';
import './customcard.css';

const CustomCard1 = ({ title, number, svg }) => {
  return (
    <div className='outer-card'>
      <div className='row-1'>
        <div className="image-box">
        {svg}
        </div>
        <div>
          <p className='title'>{title}</p>
          <p className='number'>{number}</p>
        </div>
      </div>
      <div className='bottom-row'>
        <span>See Details  </span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.52855 2.86177C7.7889 2.60142 8.21101 2.60142 8.47136 2.86177L13.138 7.52843C13.3984 7.78878 13.3984 8.21089 13.138 8.47124L8.47136 13.1379C8.21101 13.3983 7.7889 13.3983 7.52855 13.1379C7.26821 12.8776 7.26821 12.4554 7.52855 12.1951L11.0572 8.6665H3.33329C2.9651 8.6665 2.66663 8.36803 2.66663 7.99984C2.66663 7.63165 2.9651 7.33317 3.33329 7.33317H11.0572L7.52855 3.80458C7.26821 3.54423 7.26821 3.12212 7.52855 2.86177Z" fill="#161616"/>
</svg>
</div>
    </div>
  );
};

export default CustomCard1;
