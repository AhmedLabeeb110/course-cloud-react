import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const FAQSection = () => {
  return (
    <div className="faqSection">
      <Container>
        <div>
          <br />
          <br />
          <br />
          <h3 class="text-center">Frequently asked questions</h3>
          <br />
          <br />
          <h4>Free Trial</h4>
          <br />
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How does the free trial work?
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Sit at adipiscing turpis massa amet tempus lectus aliquam.
                  Eget at tristique in viverra ultricies nec pulvinar. Vitae
                  magna commodo odioyut.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Who is eligible to participate in free trial?
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Sit at adipiscing turpis massa amet tempus lectus aliquam.
                  Eget at tristique in viverra ultricies nec pulvinar. Vitae
                  magna commodo odioyut.
                </div>
              </div>
            </div>
          </div>
          
          <br />
          <h4>Pricing & Payment</h4>
          <br />
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  How does the free trial work?
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse show"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Sit at adipiscing turpis massa amet tempus lectus aliquam.
                  Eget at tristique in viverra ultricies nec pulvinar. Vitae
                  magna commodo odioyut.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Who is eligible to participate in free trial?
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  Sit at adipiscing turpis massa amet tempus lectus aliquam.
                  Eget at tristique in viverra ultricies nec pulvinar. Vitae
                  magna commodo odioyut.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FAQSection;
