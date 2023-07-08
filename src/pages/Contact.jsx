import InputField from "../commonComponent/InputField";
import Button from "../commonComponent/Button";
import "../assets/scss/_form.scss";
import Title from "../commonComponent/Title";
import ContactBox from "../components/ContactBox/ContactBox";

import { FaEnvelopeOpenText, FaPhone } from "react-icons/fa";
const Contact = () => {
  return (
    <section className="contact section_gap" id="contact">
      <div className="container">
        <Title
          sub_title={"Reach Out To Me"}
          title={"Fill up the form and I will respond in next 24 hrs or contact me on the mentioned detail"}
          className={"flex-column"}
        />
        <div className="row justify-content-between">
          <div className="col-lg-6 col-12 order-lg-1 order-2">
            <form className="contact__form" name="contact" method="POST" action="/" data-netlify={true} onSubmit={"submit"}>
              <input type="hidden" name="subject" value="New lead from %{contact} " />
              <div className="row">
                <div className="col-12">
                  <InputField fieldType={"input"} name={"name"} inputType={"text"} placeholder={"Eg. Arjun Jhukal"} label={"Name"} />
                </div>
                <div className="col-6">
                  <InputField label={"Phone Number"} name={"phone"} fieldType={"input"} inputType={"text"} placeholder={"eg. +977 9812767046"} />
                </div>
                <div className="col-6">
                  <InputField label={"Email"} name={"email"} fieldType={"input"} inputType={"text"} placeholder={"eg. jhukal9@gamil.com"} />
                </div>
                <div className="col-12">
                  <InputField label={"Message"} name={"message"} fieldType={"textarea"} placeholder={"Describe Purpose..."} />
                </div>
                <div className="col-12">
                  <Button type={"submit"} value={"Submit"} className={"btn btn__github"} />
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-5 col-12 order-lg-2 order-1">
            <ContactBox icon={<FaPhone size={24} />} contactValue={"+977 9812767046"} />
            <ContactBox icon={<FaEnvelopeOpenText size={24} />} contactValue={"connectjhukal@gmail.com"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
