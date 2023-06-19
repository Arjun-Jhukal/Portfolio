const Button = (props) => {
  return (
    <button type={props.type ? props.type : "button"} className={props.className}>
      {props.value}
    </button>
  );
};

export default Button;
