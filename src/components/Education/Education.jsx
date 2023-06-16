import { EducationItems } from "../../data";
import "./_Education.scss";

const Education = () => {
  return (
    <section className="education ">
      <div className="education__title">
        <h1 className="lg_heading mb-5">Education</h1>
      </div>
      {EducationItems.map((item) => {
        return (
          <div className="education__item" key={item.id}>
            <div className="education__item__header">
              <h1 className="lg_heading">{item.degree}</h1>
              <p>{item.institution}</p>
              <p>{item.location}</p>
            </div>
            <div className="education__item__brief">
              <p>{item.brief}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Education;
