const InputField = (props) => {
  switch (props.fieldType) {
    case "input":
      return (
        <>
          <label> {props.label}</label>
          <input type={props.inputType} value="" placeholder={props.placeholder} onChange={props.onChange} />
        </>
      );
    case "textarea":
      return (
        <>
          <label>{props.label}</label>
          <textarea cols="30" rows="7" placeholder={props.placeholder} onChange={props.onChange}></textarea>
        </>
      );
    default:
      return (
        <>
          {props.label ? <label>{props.label}</label> : ""}
          <input type={props.inputType} placeholder={props.placeholder} onChange={props.onChange} />
        </>
      );
  }
};

export default InputField;
