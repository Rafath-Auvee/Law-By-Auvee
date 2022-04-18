import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import banner1 from "../../images/banner1.avif";
import banner2 from "../../images/banner2.avif";
import banner3 from "../../images/banner3.avif";
import "./Banner.css";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100 banner" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3>Crime Analogy</h3>
          <p>
            All ambitions are lawful except those which climb upward on the
            miseries or credulities of mankind.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 banner banner"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Civil Court</h3>
          <p>
            It is better to risk saving a guilty man than to condemn an innocent
            one.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 banner" src={banner3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Court Practice</h3>
          <p>
            Laws are like cobwebs, which may catch small flies, but let wasps
            and hornets break through.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
