const Button = (props) => {
  return <button type={props.type ? props.type : "button"}>
    {props.value}</button>;
};

export default Button;
