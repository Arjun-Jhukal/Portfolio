const PageBanner = (props) => {
  return (
    <div className="banner__02">
      <div className="container">
        <div className="banner__02__content">
          <a href="#">Home</a>
          <span>{props.pageTitle}</span>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
