import React, { Component } from "react";
import { Container, Card, Button } from "react-bootstrap";
import Slider from "react-slick";
import InstructorOne from "../../Assets/InstructorOne.png";
import InstructorTwo from "../../Assets/InstructorTwo.png";
import InstructorThree from "../../Assets/InstructorThree.png";

export default class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 450,
      slidesToShow: 3,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
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
      <div className="Featured-Instructors">
        <Container>
          <br />
          <h3> Featured Instructors</h3>
          <br />

            <Slider {...settings} className="slider mx-5" gap={10}>
              <div>
                <img src={InstructorOne} />
                <div>
                  <h3>Connor Francis</h3>
                  <p>Teaches Writing for Television</p>
                  <Button variant="warning">VIEW DETAILS</Button>
                </div>
              </div>
              <div>
                <img src={InstructorTwo} />
                <div>
                  <h3>Connor Francis</h3>
                  <p>Teaches Writing for Television</p>
                  <Button variant="warning">VIEW DETAILS</Button>
                </div>
              </div>
              <div>
                <img src={InstructorThree} />
                <div>
                  <h3>Connor Francis</h3>
                  <p>Teaches Writing for Television</p>
                  <Button variant="warning">VIEW DETAILS</Button>
                </div>
              </div>
              <div>
                <img src={InstructorThree} />
                <div>
                  <h3>Connor Francis</h3>
                  <p>Teaches Writing for Television</p>
                  <Button variant="warning">VIEW DETAILS</Button>
                </div>
              </div>
            </Slider>
          </Container>

        <br />
      </div>
    );
  }
}
