import "./_Cta.scss";

const Cta = () => {
  return (
    <section className="cta section_gap">
      <div className="container">
        <div className="cta__content text-center w-75 mx-auto">
          <h1 className="md_heading">Hire Me</h1>
          <p>
            Ready to take your web presence to the next level? Let's discuss your project needs, explore ideas, and work together to create an
            exceptional digital experience. Reach out to me today and let's make your vision a reality!"
          </p>
          <a href="#" className="btn btn__hire">
            Hire
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
