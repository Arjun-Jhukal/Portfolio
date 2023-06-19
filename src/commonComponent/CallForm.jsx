import "../assets/scss/_form.scss";
import Button from "./Button";
import InputField from "./InputField";
const CallForm = () => {
  return (
    <form className="request__call">
      <div className="container">
        <div className="form__content">
          {/* Country Flag */}
          <select name="country">
            <option>Nepal</option>
          </select>

          {/* Country Code */}
          <InputField readOnly={"readonly"} fieldType={"input"} inputType={"text"} placeholder={"+977"} />

          {/* Actual Phone Number */}
          <InputField fieldType={"input"} inputType={"tel"} placeholder={"98XXXXXXXX"} />
        </div>
        <Button type={"submit"} value={"Submit"} className={"btn btn__view__all mt-3"} />
      </div>
    </form>
  );
};

export default CallForm;
