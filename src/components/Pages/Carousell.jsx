import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

export const Carousell = () => {

  return (
    <div className='container mt-5 d-flex justify-content-center'>

        <Carousel fade variant="dark" className='arrows'>

        <Carousel.Item>
          <Link to='/calendario'>
            <img
                className="d-block"
                src= './noticias/01.jpg'
                alt="First slide"
            />
          </Link>
        </Carousel.Item>

        <Carousel.Item >
        <Link to='/calendario'>
            <img
                className="d-block"
                src= './noticias/02.jpg'
                alt="First slide"
            />
          </Link>
        </Carousel.Item>

        <Carousel.Item >
        <Link to='/calendario'>
            <img
                className="d-block"
                src= './noticias/03.jpg'
                alt="First slide"
            />
          </Link>
        </Carousel.Item>
        
    </Carousel>
    </div>
  );
};
