const InputField = (props) => {
  switch (props.fieldType) {
    case "input":
      return (
        <>
          {props.label ? <label> {props.label}</label> : ""}
          <input type={props.inputType} value={props.value} placeholder={props.placeholder} onChange={props.onChange} readOnly={props.readOnly} />
        </>
      );
    case "textarea":
      return (
        <>
          {props.label ? <label> {props.label}</label> : ""}
          <textarea cols="30" rows="7" value={props.value} placeholder={props.placeholder} onChange={props.onChange}></textarea>
        </>
      );
    default:
      return (
        <>
          {props.label ? <label>{props.label}</label> : ""}
          <input type={props.inputType} value={props.value} placeholder={props.placeholder} onChange={props.onChange} />
        </>
      );
  }
};

export default InputField;
