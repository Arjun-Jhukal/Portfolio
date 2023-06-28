import { TestimonialItems } from "../../data";
import "./_Review.scss";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Title from "../../commonComponent/Title";
const Review = () => {
  // const PrevArrow = ({ onClick }) => (
  //   <button className="slick-arrow slick-prev" onClick={onClick}>
  //     <FaAngleLeft />
  //   </button>
  // );

  // const NextArrow = ({ onClick }) => (
  //   <button className="slick-arrow slick-next" onClick={onClick}>
  //     <FaAngleRight />
  //   </button>
  // );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    // prevArrow: <PrevArrow />,
    // nextArrow: <NextArrow />,
  };

  return (
    <section className="review " id="Review">
      <div className="container">
        <Title
          title={
            "Explore what my clients have to say about their experience working with me. Discover how I've helped them achieve their goals and create exceptional results"
          }
          className={"flex-column "}
          sub_title={"Clients Speak About My Work"}
          headingColor={"white"}
        />
        <Slider className=" justify-content-between" {...settings}>
          {TestimonialItems.map((item, index) => {
            return (
              <div key={index}>
                <div className="review__item">
                  <div className="review__item__image">
                    <img src={item.image} alt={`${item.name} `} />
                  </div>
                  <div className="review__text">
                    <div className="review__text__header">
                      <h1 className="sm_heading">{item.name}</h1>
                      <span>{item.company}</span>
                      <span>{item.post}</span>
                    </div>
                    <div className="review__text__message">
                      <p>{item.message}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Review;
