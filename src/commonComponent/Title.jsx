const Title = ({ sub_title, className, title, field }) => {
  return (
    <div className="section_title mb-3">
      {sub_title ? <h1 className="sub_heading">{sub_title}</h1> : ""}
      <h1 className={` ${className}`}>
        {title}
        {field ? <span>{field}</span> : ""}
      </h1>
    </div>
  );
};

export default Title;
