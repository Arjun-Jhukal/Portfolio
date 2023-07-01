import { skillItems } from "../../data";
import "./_Skill.scss";
import Title from "../../commonComponent/Title";
// import image_01 from "../../assets/img/banner/01.png";

const Skill = () => {
  return (
    <section className="skill " id="skills">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <Title
              title={"As you explore my skills section, you'll gain insight into the strengths I bring to the table."}
              className={"flex-column"}
              sub_title={"My Skills"}
              brief={
                "I am continuously expanding and refining my skill set to stay at the forefront of industry trends and best practices. I believe in the power of continuous learning and strive to enhance my abilities to deliver exceptional outcomes."
              }
            />
          </div>
          <div className="col-lg-6 col-12">
            <div className="row">
              {skillItems.map((item, index) => {
                return (
                  <div className="col-lg-3 col-md-2 col-sm-3 col-4" key={index}>
                    <div className="skill__item">
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
