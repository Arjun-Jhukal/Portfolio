import Title from "../../commonComponent/Title";
import { Link } from "react-router-dom";
import PortfolioSingle from "./PortfolioSingle";

import { PortfolioItems } from "../../data";
import "./_Portfolio.scss";
const Portfolio = (props) => {
  const numberOfItem = parseInt(props.length);
  console.log(numberOfItem);

  return (
    <section className="portfolio section_gap" id="Portfolio">
      <div className="container">
        <Title
          title={"Each piece represents my passion, dedication, and expertise in frontend Development"}
          className={"flex-column "}
          sub_title={"Explore My Work"}
        />
        <div className="row justify-content-center ">
          {PortfolioItems.slice(0, numberOfItem).map((item, index) => {
            return (
              <div className="col-lg-9 col-12 " key={index}>
                <PortfolioSingle image={item.image} title={item.title} about={item.about} />
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
