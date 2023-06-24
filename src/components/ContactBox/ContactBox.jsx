import "./_ContactBox.scss";
const ContactBox = (props) => {
  return (
    <div className="box">
      {props.icon}
      <span>{props.contactValue}</span>
    </div>
  );
};

export default ContactBox;
