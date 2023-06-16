import "./_Banner.scss";
// import Title from "../../commonComponent/Title";
import cv from "../../assets/img/profile/cv.pdf";
import bannerImage from "../../assets/img/profile/banner-03.png";

const Banner = () => {
  // const intro = ["Arjun J.", "Freelancer", "Frontend Developer"];
  return (
    <section className="banner">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-4 col-md-5 col-sm-6 col-12">
            <div className="banner__image ">
              <img src={bannerImage} alt="Arjun Jhukal Banner Image with Front Face" />
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-12">
            <div className="banner__text">
              <span className="sub_heading">Hi There!</span>
              <h1 className="lg_heading">
                I&apos;m <span>A Frontend Developer</span>
              </h1>
              <p>
                I&apos;m a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web
                applications through carefully crafted code and user-centric design.
              </p>

              <div className="banner__btns">
                <a href={cv} className="btn btn__hire">
                  Download CV
                </a>
                <a href="#" className="btn btn__request">
                  Request Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
