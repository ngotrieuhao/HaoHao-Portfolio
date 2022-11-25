import React from "react";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="knowledge scroll-section" id="skill-nav">
        <div className="knowledge__left">
          <div className="knowledge__left--content">
            <div className="knowledge__left--content_item">HTML</div>
            <div className="knowledge__left--content_item">CSS</div>
            <div className="knowledge__left--content_item">Javascript</div>
            <div className="knowledge__left--content_item">Bootstrap</div>
            <div className="knowledge__left--content_item">UX/UI</div>
            <div className="knowledge__left--content_item">ReactJS</div>
          </div>
        </div>
        <div className="knowledge__right">
          <img className="rotate" src="./plane.png" alt="plance " />
        </div>
      </div>
    </section>
  );
};

export default Skills;
