import { Auxilary } from "../hoc/Auxilary";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import AboutPage from "./AboutPage";
import Blog from "../components/Blog/Blog";
import ContactPage from "./Contact";
import Review from "../components/Testimonials/Review";
// import CallForm from "../commonComponent/CallForm";
// import Portfolio from "../components/Portolio/Portfolio";
const HomePage = () => {
  return (
    <Auxilary>
      <Navbar />
      <main className="main">
        <Banner />
        <AboutPage />
        <Review />
        <Blog />
        <ContactPage />
      </main>
    </Auxilary>
  );
};

export default HomePage;
