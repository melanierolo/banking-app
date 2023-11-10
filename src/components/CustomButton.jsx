import React from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import './CustomButton.css';

const CustomButton = ({ to, children }) => {
  return (
    <Button className='btn--custom' size='lg'>
      <NavLink to={to} className='link__button'>
        {children}
      </NavLink>
    </Button>
  );
};

export default CustomButton;
