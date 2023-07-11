import Title from "../../commonComponent/Title";

import PortfolioSingle from "./PortfolioSingle";

import { PortfolioItems } from "../../data";
import "./_Portfolio.scss";
const Portfolio = () => {
  return (
    <section className="portfolio section_gap" id="projects">
      <div className="container">
        <Title
          title={"Each piece represents my passion, dedication, and expertise in frontend Development"}
          className={"flex-column "}
          sub_title={"Explore My Work"}
        />
        <div className="row justify-content-center ">
          {PortfolioItems.map((item, index) => {
            return (
              <div className=" col-12 " key={index}>
                <PortfolioSingle image={item.image} title={item.title} about={item.about} list={item.tools} code={item.code} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
