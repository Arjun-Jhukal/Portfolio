import { Auxilary } from "../hoc/Auxilary";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Portfolio from "../components/Portolio/Portfolio";
import Skill from "../components/Skill/Skill";
import Experience from "../components/Experience/Experience";
import Education from "../components/Education/Education";
import Cta from "../components/cta/Cta";
import Footer from "../components/Footer/Footer";
import Review from "../components/Testimonials/Review";
import CallForm from "../commonComponent/CallForm";
const HomePage = () => {
  return (
    <Auxilary>
      <Navbar />
      <main className="main">
        <Banner />
        <Portfolio />
        <Skill />
        <div className="container section_gap">
          <div className="row">
            <div className="col-lg-6 col-12">
              <Education />
            </div>
            <div className="col-lg-6 col-12">
              <Experience />
            </div>
          </div>
        </div>

        <Cta />
        <Review />
      </main>
      <Footer />

      {/* <CallForm /> */}
    </Auxilary>
  );
};

export default HomePage;
