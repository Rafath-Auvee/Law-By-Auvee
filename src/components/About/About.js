import React from "react";
import auvee from "../../images/auvee.jfif";
import "./About.css"
const About = () => {
  return (
    <div>
      <div className="container">
        
          <img className="about-img" src={auvee} alt="" />
        
        
          <p class="para">
            Hello! My name is Rafath Bin Zafar Auvee. An enthusiastic,
            self-taught, motivated programmer I am studying Bachelor of Science
            & Engineering in Computer Science and Engineering at Bangladesh Army
            University of Science and Technology. For me, computer programming
            is love, passion, exploration & much more. Basically, I do a lot of
            self-made Arduino projects and solve problems in online Judge. And I
            want to be a full stack web developer.
          </p>
        
      </div>
    </div>
  );
};

export default About;
