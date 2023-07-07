import { TestimonialItems } from "../../data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./_Review.scss";

import Title from "../../commonComponent/Title";
const Review = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="testimonial " id="review">
      <div className="container">
        <Title
          title={
            "Explore what my clients have to say about their experience working with me. Discover how I've helped them achieve their goals and create exceptional results"
          }
          className={"flex-column "}
          sub_title={"Clients Speak About My Work"}
          headingColor={"white"}
        />
        <Slider className="row testi_slider justify-content-between" {...settings}>
          {TestimonialItems.map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="testi_item">
                  <div className="testi_item_content">
                    <div className="message">
                      <p>{item.message}</p>
                    </div>
                  </div>
                  <div className="client">
                    <div className="profile">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="client__about">
                      <h5>{item.name}</h5>
                      <span>{item.company}</span>
                      <span>{item.post}</span>
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
