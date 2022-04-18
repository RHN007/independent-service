import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jfif'
import banner3 from '../../../images/banner/banner3.jfif'


   


const Banner = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= {banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-danger'>Your Personal Accountant</h3>
          <p className='text-danger'> Tensed with Finanace I am here to Help you </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 className='text-danger'>Internal and management audit</h3>
          <p className='text-danger'>This is the most import among all service I Provided.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 className='text-danger'>Best Service You will Get </h3>
          <p className='text-danger'>
            I Will Serve You in Best Possible Way. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Banner;