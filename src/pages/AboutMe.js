import React from "react";
import home1 from "../images/home1.png";
//Style
import styled from "styled-components";

const AboutMe = () => {
  return (
    <StyledAbout>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Welcome !</h2>
          </div>
        </div>
        <div className="title">
          <div className="hide">
            <h2>
              to my <span>projects</span> showcase
            </h2>
          </div>
        </div>
        <div className="title">
          <div className="hide">
            <h2>and nice to meet you!</h2>
          </div>
        </div>
        <p>
          Contact me for any other project that you want to build up. I will be
          glad to help you achieve your goal!
        </p>
        <button>Contact me</button>
      </div>
      <div className="image">{/* <img src={home1} alt="macbook" /> */}</div>
    </StyledAbout>
  );
};

//Styled Components
const StyledAbout = styled.div`
  display: flex;
  min-height: 90vh;
  align-items: center;
  justify-content: center;
  color: black;
`;

export default AboutMe;
