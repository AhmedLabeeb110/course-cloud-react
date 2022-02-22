import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import GooglePlay from "../../Assets/GooglePlay.png";
import ApplePlay from "../../Assets/ApplePlay.png";
import AppleiPhone11Pro1 from "../../Assets/AppleiPhone11Pro1.png";
import Cardimg from "../../Assets/Cardimg.png";

const PlaystoreSection = () => {
  return (
    <div className="PlaystoreSection position-relative">
      <Container>
        <Col>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Row>
            <br />
            <div className="col-lg-6 col-md-8 col-sm-12">
            <h3 className='download-text'>Easy Access From Anywhere</h3>
            <br />
            <p className='download-text'>
              Tincidunt eget lectus facilisis ut tincidunt. Tellus at diam
              facilisis enim consectetur adipiscing cras tincidunt. Et placerat
              tempor dignissim tempor eget sit cursus. Diam nunc vulputate vel
              ornare. Ultrices sapien ullamcorper tristique eleifend amet leo
              odio.
            </p>
            <div>
              <img src={GooglePlay} alt="" />
              <img src={ApplePlay} alt="" />
            </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-lg-end">
            <img src={AppleiPhone11Pro1} className='download'/>
            </div>
          </Row>
          <br />
        </Col>
      </Container>
    </div>
  );
};

export default PlaystoreSection;
