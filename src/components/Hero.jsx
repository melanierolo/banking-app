import React from "react";
import Card from "react-bootstrap/Card";
import Hero_img from "../assets/Hero_img.jpeg";
import Button from "react-bootstrap/Button";
import { NavLink } from "react-router-dom";

import "./Hero.css";

const Hero = () => {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src={Hero_img} alt="Card image" className="hero__img" />
        <Card.ImgOverlay className="hero__overlay">
          <Card.Title className="hero__tittle">
            Welcome To The Banking Application
          </Card.Title>
          <Card.Text className="hero__text">
            for all your banking needs.
          </Card.Text>
          <Button className="hero__button" size="lg">
            <NavLink to="/createaccount" className="link__button">
              Create Account
            </NavLink>
          </Button>
        </Card.ImgOverlay>
      </Card>
    </>
  );
};

export default Hero;
