import AboutBanner from "../components/AboutBanner/AboutBanner";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";
import Navbar from "../components/Navbar/Navbar";
import Skill from "../components/Skill/Skill";
// import Cta from "../components/cta/Cta";

import { Auxilary } from "../hoc/Auxilary";

const AboutPage = () => {
  return (
    <Auxilary>
      <Navbar />
      <AboutBanner />

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
      <Skill />
      {/* <Cta /> */}
    </Auxilary>
  );
};

export default AboutPage;
