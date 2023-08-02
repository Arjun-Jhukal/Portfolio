import { AiOutlineGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

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
          {props.list.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>

        <div className="portfolio__item__btns">
          <Link to={props.code} target="_blank" className="btn btn__github">
            <span>Source Code</span>
            <AiOutlineGithub size={20} />
          </Link>
          <Link to={props.live} target="_blank" className="btn btn__github">
            <span>Live Site</span>
            <BsBoxArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSingle;
