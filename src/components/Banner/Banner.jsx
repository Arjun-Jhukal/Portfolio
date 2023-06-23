import "./_Banner.scss";
// import Title from "../../commonComponent/Title";
import cv from "../../assets/img/profile/cv.pdf";
import bannerImage from "../../assets/img/profile/banner-03.png";
import { BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import CallRequest from "../../commonComponent/CallRequest";
const Banner = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Arjun Jhukal", "Frontend Developer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const [requestStatus, setRequestStatus] = useState(false);

  const toggleRequestForm = () => {
    setRequestStatus(true);
  };
  const closeRequest = () => {
    setRequestStatus(false);

    setErrorValue({ ...errorValue, formStatus: false });
  };

  // Handeling Form Validation

  const [subjectValue, setSubjectValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  const subjectChange = (e) => {
    setSubjectValue(e.target.value);
  };
  const phoneChange = (e) => {
    setPhoneValue(e.target.value);
  };
  const [errorValue, setErrorValue] = useState({
    subjectError: false,
    phoneError: false,
    fromStatus: false,
  });

  const validateForm = (e) => {
    const phoneNumberPattern = /^\d{10}$/;
    e.preventDefault();

    if (subjectValue.trim() === "") {
      setErrorValue((prevErrorValue) => ({
        ...prevErrorValue,
        subjectError: true,
      }));
    } else {
      setErrorValue((prevErrorValue) => ({
        ...prevErrorValue,
        subjectError: false,
      }));
    }
    if (phoneValue.trim() === "") {
      setErrorValue((prevErrorValue) => ({
        ...prevErrorValue,
        phoneError: true,
      }));
    } else if (!phoneNumberPattern.test(phoneValue)) {
      setErrorValue((prevErrorValue) => ({
        ...prevErrorValue,
        phoneError: true,
      }));
    } else {
      setErrorValue((prevErrorValue) => ({
        ...prevErrorValue,
        phoneError: false,
        formStatus: true,
      }));

      setSubjectValue("");
      setPhoneValue("");
    }
  };

  return (
    <>
      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 order-lg-1 order-2">
              <div className="banner__text">
                <h2>
                  Hi I'm <br /> <span ref={el}>Arjun Jhukal</span>
                </h2>
                <h3>Kathmandu, Nepal</h3>
                <p>
                  I'm a frontend developer based in Kathmandu, Nepal. I build a beautiful and clean web application through crafted code and
                  user-centric design
                </p>

                <div className="banner__btns">
                  <a href={cv} className="btn btn__hire">
                    Download CV
                  </a>
                  <button className="btn btn__request" onClick={toggleRequestForm}>
                    Request Call
                  </button>
                </div>

                <div className="banner__socials">
                  <BsFacebook />
                  <BsLinkedin />
                  <BsGithub />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 order-lg-2 order-1">
              <div className="banner__image">
                <div className="image__box">
                  <img src={bannerImage} alt="" />
                </div>
                <div className="pattern"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CallRequest
        active={requestStatus}
        close={closeRequest}
        validateForm={validateForm}
        errorValue={errorValue}
        subjectValue={subjectValue}
        phoneValue={phoneValue}
        subjectChange={subjectChange}
        phoneChange={phoneChange}
        formStatus={errorValue.fromStatus}
        subjectError={errorValue.subjectError}
      />
    </>
  );
};

export default Banner;
