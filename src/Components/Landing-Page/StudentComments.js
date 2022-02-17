import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import StudentComment from "../../Assets/StudentComment.png"

const StudentComments = () => {
  return (
    <div className="comments-box">
    <Container>
       <img src={StudentComment} alt="StudentComments" className="w-75 ms-5"/>
    </Container>
    </div>
  )
}

export default StudentComments