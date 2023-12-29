import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";

const Skills = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1 "],
  });
  return (
    <section
      style={{ position: "relative" }}
      className="skills section"
      id="skills"
    >
      <motion.h2
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
        className="section-title"
      >
        Skills
      </motion.h2>
      <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
        className="knowledge scroll-section"
        id="skill-nav"
      >
        <div className="knowledge__left">
          <div className="knowledge__left--content">
            <div className="knowledge__left--content_item">Javascript</div>
            <div className="knowledge__left--content_item">ReactJS</div>
            <div className="knowledge__left--content_item">NextJS</div>
            <div className="knowledge__left--content_item">Shopify</div>
            <div className="knowledge__left--content_item">TailwindCSS</div>
            <div className="knowledge__left--content_item">UX/UI</div>
          </div>
        </div>
      </motion.div>
      <div className="knowledge__right">
        <img className="rotate" src="./plane.png" alt="plance " />
      </div>
    </section>
  );
};

export default Skills;
