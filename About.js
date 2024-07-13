//Imports
import React, { useState } from "react";
import Figure from "react-bootstrap/Figure";
import { FigureImage, NavbarBrand } from "react-bootstrap";
import TotalPrice from "../../components/TotalPrice/TotalPrice";
import NavMenu from "../../components/NavBar/NavMenu";
import "./About.css";

const About = ({ total }) => {
  return (
    <div className="about-container" style={{ textAlign: "center" }}>
      {" "}
      <div className="header">
        <NavMenu />
      </div>
      {total > 0 && <TotalPrice total={total} />}
      {/*Use Figure*/}
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="171x180"
          src="https://www.pngall.com/wp-content/uploads/15/Wednesday-Background-PNG.png"
        />
        <Figure.Caption>
          <h3>We are a small business focused on selling Surly bikes.</h3>
        </Figure.Caption>
        <h3>
          We are open from Wednesday to Wednesday, from Midnight until 6 am.
        </h3>

        <Figure.Caption />
        <h3> Please, get in touch at Wednesday@icloud.com</h3>
        <br></br>

        <FigureImage
          className="Image"
          width={300}
          height={350}
          alt="171x180"
          src="https://d3h6k4kfl8m9p0.cloudfront.net/stories/N-AJ8cLdDpP3FxJ3yU9S-g.jpg"
        />
        <br></br>
        <br></br>
        <FigureImage
          width={300}
          height={350}
          alt="171x180"
          src="https://i.pinimg.com/564x/81/0a/3d/810a3da5c5d2c8b821607af62c5f8141.jpg"
        />

        <br></br>
        <br></br>
      </Figure>
    </div>
  );
};

export default About;
