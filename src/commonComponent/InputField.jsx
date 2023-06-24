const InputField = (props) => {
  switch (props.fieldType) {
    case "input":
      return (
        <>
          {props.label ? <label> {props.label}</label> : ""}
          <input
            type={props.inputType}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            readOnly={props.readOnly}
            ref={props.reference}
            className={props.className}
            name={props.name}
          />
        </>
      );
    case "textarea":
      return (
        <>
          {props.label ? <label> {props.label}</label> : ""}
          <textarea
            cols="30"
            rows="7"
            value={props.value}
            className={props.className}
            ref={props.reference}
            placeholder={props.placeholder}
            onChange={props.onChange}
            name={props.name}
          ></textarea>
        </>
      );
    default:
      return (
        <>
          {props.label ? <label>{props.label}</label> : ""}
          <input
            type={props.inputType}
            className={props.className}
            ref={props.reference}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            name={props.name}
          />
        </>
      );
  }
};

export default InputField;
