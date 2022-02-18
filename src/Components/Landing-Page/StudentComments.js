import React, { Component } from "react";
import Slider from "react-slick";

import { Container, Row, Col } from "react-bootstrap";
import MaskGroup from "../../Assets/MaskGroup.png";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="text-center comments-box">
        <Container className="position-relative p-5">
          <h3> What Students are Saying </h3>
          <br />
          <Container>
          <Slider {...settings}>
            <div className="d-flex align-items-center ms-5">
              <div className="w-50 text-center">
                <p>
                  “I've learned a positively immeasurable amount of things from
                  Georgina Sims and Holly Tyler. It gave me this sense of
                  possibility. Like I can actually do it.”
                </p>
                <p>-John Coates, Content Writer, UK</p>
              </div>
              <img src={MaskGroup} alt="MaskGroup" className="w-25" />
            </div>
            <div>
              <h3>2</h3>
            </div>
          </Slider>
          </Container>
        </Container>
      </div>
    );
  }
}
