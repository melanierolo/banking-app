import React from 'react';
import Card from 'react-bootstrap/Card';
import Hero_img from '../assets/Hero_img.jpeg';
import CustomButton from './CustomButton';

import './Hero.css';

const Hero = () => {
  return (
    <>
      <Card className='bg-dark text-white'>
        <Card.Img src={Hero_img} alt='Card image' className='hero__img h-100' />
        <Card.ImgOverlay className='hero__overlay  d-flex flex-column justify-content-center align-items-center'>
          <Card.Title className='hero__tittle'>
            Welcome To The Banking Application
          </Card.Title>
          <Card.Text className='hero__text'>
            for all your banking needs.
          </Card.Text>
          <Card.Text className='hero__button'>
            <CustomButton to='/createaccount'>Create Account</CustomButton>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default Hero;
