import "./_Blog.scss";
// import image_01 from "../../assets/img/blog/01.jpg";

import { BsFillCalendarDayFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { BlogItems } from "../../data";
import Pagination from "../Pagination/Pagination";

const Blog = () => {
  return (
    <section className="blog section_gap">
      <div className="container">
        <div className="row">
          {BlogItems.map((item, index) => {
            return (
              <div className="col-lg-6 col-md-12" key={index}>
                <div className="blog__item">
                  <a href="#" className="blog__item__image">
                    <img src={item.image} alt={item.title} />
                  </a>
                  <div className="blog__item__text">
                    <ul>
                      <li>
                        <BsFillCalendarDayFill />
                        <span>{item.date}</span>
                      </li>
                      <li>
                        <AiOutlineHeart />
                        <span>{item.like}</span>
                      </li>
                    </ul>
                    <a href="#" className="sm_heading">
                      {item.title}
                    </a>

                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Pagination />
      </div>
    </section>
  );
};

export default Blog;
