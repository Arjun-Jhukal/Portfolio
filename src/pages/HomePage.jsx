import { Auxilary } from "../hoc/Auxilary";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import AboutBanner from "../components/AboutBanner/AboutBanner";
import ProjectPage from "../components/Portolio/Portfolio";
import Education from "../components/Education/Education";
import Experience from "../components/Experience/Experience";

import Blog from "../components/Blog/Blog";
import ContactPage from "./Contact";
import Review from "../components/Testimonials/Review";
import Skill from "../components/Skill/Skill";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const HomePage = () => {
  ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 1000,
    delay: 200,
  });
  useEffect(() => {
    ScrollReveal().reveal(".section_title", {
      origin: "top",
    });
    ScrollReveal().reveal(".portfolio__item", {
      origin: "bottom",
    });
  });
  return (
    <Auxilary>
      <Navbar />
      <main className="main">
        <Banner />
        <AboutBanner />
        <ProjectPage />
        <section className="container " id="experience">
          <div className="row">
            <div className="col-lg-6 col-12">
              <Education />
            </div>
            <div className="col-lg-6 col-12">
              <Experience />
            </div>
          </div>
        </section>
        <Skill />

        <Review />
        <Blog />
        <ContactPage />
      </main>
    </Auxilary>
  );
};

export default HomePage;
