import NavBar from "../Common/NavBar"
import HeroSection from "./HeroSection"
import BecomeInstructor from "./BecomeInstructor"
import ExploreCourses from "./ExploreCourses"
import Deals from "./Deals"
import FeaturedInstructors from "./FeaturedInstructors"
import StudentComments from "./StudentComments"
import RecentBlogs from "./RecentBlogs"
import PlaystoreSection from "./PlaystoreSection"
import Subscription from "./Subscription"
import FAQSection from "./FAQSection"
import Footer from "../Common/Footer"

const Home = () => {
  return (
    <div>
    <HeroSection />
    <BecomeInstructor />
    <ExploreCourses />
    <Deals countdownTimestampMs={1659983662000} />
    <FeaturedInstructors />
    <StudentComments />
    <RecentBlogs />
    <PlaystoreSection />
    <Subscription />
    <FAQSection />
    </div>
  )
}

export default Home