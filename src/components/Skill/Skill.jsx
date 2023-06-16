import { skillItems } from "../../data";
import "./_Skill.scss";
import Title from "../../commonComponent/Title";
import image_01 from "../../assets/img/banner/01.png";

const Skill = () => {
  return (
    <section className="skill section_gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <Title title={"Tools and Technologies That i an Comfortable With"} className={"md_heading"} sub_title={"My Skills"} />
            {/* <div className="skill__banner_image">
              <img src={image_01} alt="Vs code screen" />
            </div> */}
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
