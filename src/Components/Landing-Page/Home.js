import HeroSection from "./HeroSection";
import BecomeInstructor from "./BecomeInstructor";
import ExploreCourses from "./ExploreCourses";
import Deals from "./Deals";
import FeaturedInstructors from "./FeaturedInstructors";
import StudentComments from "./StudentComments";
import RecentBlogs from "./RecentBlogs";
import PlaystoreSection from "./PlaystoreSection";
import Subscription from "./Subscription";
import FAQSection from "./FAQSection";
import Arrow from "../../Assets/Arrow.png";
// Redux
import { connect } from "react-redux";
import { Container, Nav, Row } from "react-bootstrap";

const Home = ({products}) => {
  console.log(products)
  return (
    <div>
      <HeroSection />
      <BecomeInstructor />

      

      <div className="explore-courses p-5 d-flex">
      <Container>
        <h3 className="text-center">Explore Other Courses</h3>
        <br />
        <br />
        <Nav className="justify-content-start">
          <Nav.Item>
            <Nav.Link href="/home" className="explore-nav-items">
              Most Popular
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="explore-nav-items">
            <Nav.Link eventKey="link-1" className="explore-nav-items">
              Culinary Arts
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="explore-nav-items">
            <Nav.Link eventKey="link-2" className="explore-nav-items">
              Film & TV
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="explore-nav-items">
            <Nav.Link eventKey="link-2" className="explore-nav-items">
              Lifestyle
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="explore-nav-items">
            <Nav.Link eventKey="link-2" className="explore-nav-items">
              Sports & Games
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="ms-auto explore-nav-items ">
            <Nav.Link eventKey="link-2" className="explore-nav-items">
              See All Courses <img src={Arrow} alt="Arrow" />
            </Nav.Link>
          </Nav.Item>
  </Nav>

        <br />
        <br />
        <br />

      <Row>
      {products.map((prod) => (
        <ExploreCourses key={prod.id} productData={prod} />
        ))}
        </Row>
      </Container>
  </div>
      


      <Deals countdownTimestampMs={1659983662000} />
      <FeaturedInstructors />
      <StudentComments />
      <RecentBlogs />
      <PlaystoreSection />
      <Subscription />
      <FAQSection />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Home);