import { useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import InputField from "../commonComponent/InputField";
import Button from "../commonComponent/Button";
import "../assets/scss/_form.scss";
import Title from "../commonComponent/Title";
const Contact = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <main className="main">
      <Navbar />

      <section className="contact section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 ">
              <Title sub_title={"Reach Out To Me"} title={"Fill up the form and i will respond in next 24 hrs"} className={"flex-column"} />
              <form className="contact__form">
                <div className="row">
                  <div className="col-12">
                    <InputField fieldType={"input"} inputType={"text"} placeholder={"Eg. Arjun Jhukal"} label={"Name"} reference={inputRef} />
                  </div>
                  <div className="col-6">
                    <InputField label={"Phone Number"} fieldType={"input"} inputType={"text"} placeholder={"eg. +977 9812767046"} />
                  </div>
                  <div className="col-6">
                    <InputField label={"Email"} fieldType={"input"} inputType={"text"} placeholder={"eg. jhukal9@gamil.com"} />
                  </div>
                  <div className="col-12">
                    <InputField label={"Message"} fieldType={"textarea"} placeholder={"Describe Purpose..."} />
                  </div>
                  <div className="col-12">
                    <Button type={"submit"} value={"Submit"} className={"btn btn__github"} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
