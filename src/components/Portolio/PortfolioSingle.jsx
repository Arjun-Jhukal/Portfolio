import { AiOutlineGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

const PortfolioSingle = (props) => {
  return (
    <div className="portfolio__item">
      <div className="portfolio__item__image">
        <img src={props.image} alt={props.title} />
      </div>

      <div className="portfolio__item__text">
        <h1 className="md_heading">{props.title}</h1>
        <p>{props.about}</p>

        <ul>
          <li>React</li>
          <li>SASS</li>
          <li>Bootstrap</li>
        </ul>

        <div className="portfolio__item__btns">
          <div className="btn btn__github">
            <span>Source Code</span>
            <AiOutlineGithub size={20} />
          </div>
          <div className="btn btn__github">
            <span>Live Site</span>
            <BsBoxArrowUpRight size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSingle;