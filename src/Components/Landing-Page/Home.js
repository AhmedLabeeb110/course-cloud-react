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

// Redux
import { connect } from "react-redux";

const Home = ({products}) => {
  return (
    <div>
      <HeroSection />
      <BecomeInstructor />

      <div>
      {products.map((prod) => (
        <ExploreCourses key={prod.id} productData={prod} />
      ))}
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