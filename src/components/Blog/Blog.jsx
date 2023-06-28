import "./_Blog.scss";
import { Link } from "react-router-dom";
import { BsFillCalendarDayFill } from "react-icons/bs";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Title from "../../commonComponent/Title";
import { BlogItems } from "../../data";

const Blog = () => {
  return (
    <section className="blog pt-80">
      <div className="container">
        <Title title={" My Thoughts about whats going around"} className={"flex-column "} sub_title={"Blogs"} />
        <div className="row">
          {BlogItems.map((item, index) => {
            return (
              <div className="col-lg-6 col-md-12" key={index}>
                <div className="blog__item">
                  <Link to={`/blog/${index}`} className="blog__item__image">
                    <img src={item.image} alt={item.title} />
                  </Link>
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
                    <Link to={`/blog/${index}`} className="sm_heading">
                      {item.title}
                    </Link>

                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
