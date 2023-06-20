import { PortfolioItems } from "../../data";
import Title from "../../commonComponent/Title";
import "./_Portfolio.scss";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineGithub, AiOutlineExpand, AiFillCodeSandboxCircle } from "react-icons/ai";

const Portfolio = () => {
  return (
    <section className="portfolio section_gap" id="Portfolio">
      <div className="container">
        <Title
          title={"Each piece represents my passion, dedication, and expertise in frontend Development"}
          className={"flex-column "}
          sub_title={"Explore My Work"}
          headingColor={"black"}
        />
        <div className="row">
          {PortfolioItems.map((item) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                <div className="portfolio__item">
                  <div className="portfolio__item__image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="portfolio__item__text">
                    <h1 className="md_heading">{item.title}</h1>
                    <p>{item.about}</p>
                    <ul>
                      {item.tools.forEach((tool, index) => {
                        <li key={index}>{tool}</li>;
                      })}
                    </ul>
                  </div>

                  {item.status ? <div className="portfolio__status">{item.status}</div> : ""}

                  <div className="portfolio__item__btns">
                    <div className="btn btn__github">
                      <AiFillCodeSandboxCircle size={20} />
                      <span>Source Code</span>
                    </div>
                    <div className="btn btn__github">
                      <AiOutlineArrowRight size={20} />
                      <span>Live Site</span>
                    </div>
                    {/* <div className="btn btn__github">
                      <AiOutlineExpand size={20} />
                      <span>More</span>
                    </div> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="portfolio__btn text-center">
          <Link to={"/portfolio"} className="btn btn__view__all">
            View All Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
