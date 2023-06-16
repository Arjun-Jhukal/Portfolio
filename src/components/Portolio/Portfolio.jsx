import { PortfolioItems } from "../../data";
// import { GrLinkNext } from "react-icons/gr";
// import Title from "../../commonComponent/Title";
import "./_Portfolio.scss";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="row">
          {PortfolioItems.map((item) => {
            return (
              <div className="col-lg-4 col-md-6 col-12" key={item.id}>
                <div className="portfolio__item">
                  <div className="portfolio__item__image">
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className="portfolio__item__text">
                    <h1 className="sm_heading">{item.title}</h1>
                    <p>{item.about}</p>
                    <ul>
                      {item.tools.forEach((tool, index) => {
                        <li key={index}>{tool}</li>;
                      })}
                    </ul>
                  </div>

                  {item.status ? <div className="portfolio__status">{item.status}</div> : ""}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
