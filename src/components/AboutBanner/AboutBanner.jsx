import aboutImage from "../../assets/img/profile/banner-02.png";

import "./_aboutBanner.scss";
const AboutBanner = () => {
  return (
    <div className="banner__02">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 col-12">
            <div className="banner__02__image">
              <img src={aboutImage} alt="" />
            </div>
          </div>
          <div className="col-lg-7 col-12">
            <div className="banner__02__text">
              <p>
                I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications
                through carefully crafted code and user-centric design.
              </p>
              <ul>
                <li>
                  <span>First Name</span>
                  <span>Arjun</span>
                </li>
                <li>
                  <span>Freelance</span>
                  <span>Available</span>
                </li>
                <li>
                  <span>Last Name</span>
                  <span>Jhukal</span>
                </li>
                <li>
                  <span>Language</span>
                  <span>English , Nepali, Hindi</span>
                </li>
                <li>
                  <span>Birthdate</span>
                  <span>2000-06-10</span>
                </li>
                <li>
                  <span>Phone</span>
                  <span>+977 9812767046</span>
                </li>
                <li>
                  <span>Nationality</span>
                  <span>Nepali</span>
                </li>
                <li>
                  <span>Email</span>
                  <span>jhukal9@gmail</span>
                </li>
                <li>
                  <span>Experience</span>
                  <span>1 year</span>
                </li>
                <li>
                  <span>Viber</span>
                  <span>Unknown</span>
                </li>
                <li>
                  <span>Address</span>
                  <span>Kathmandu Nepal</span>
                </li>
                <li>
                  <span>Marital Status</span>
                  <span>Married [Rojina Karki]</span>
                </li>
              </ul>
              <a href="#" className="btn btn__hire">
                Download My CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
