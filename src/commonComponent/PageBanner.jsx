import { Link } from "react-router-dom";
const PageBanner = (props) => {
  return (
    <div className="banner__02">
      <div className="container">
        <div className="banner__02__content">
          <Link to={"/"}>Home</Link>
          <span>{props.pageTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
