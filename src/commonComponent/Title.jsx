const Title = (props) => {
  return (
    <div className={`section_title ${props.className}`}>
      <h1 className="sub_heading">{props.sub_title}</h1>
      <h1 className={`sm_heading ${props.headingColor}`}>{props.title}</h1>

      {props.brief ? <p>{props.brief}</p> : ""}
    </div>
  );
};

export default Title;
