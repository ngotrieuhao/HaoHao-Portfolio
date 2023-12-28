import React, { useRef } from "react";
import {useScroll, motion} from "framer-motion"

const About = () => {
  const ref = useRef(null);
  const {scrollYProgress} =  useScroll({
    target: ref,
    offset: ["0 1", "1.33 1 "]
  })
  return (
    <motion.div 
     ref={ref}
      style={{
        scale: scrollYProgress,
        opacity: scrollYProgress
      }}>
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>

      <div className="about__container bd-grid">
        <div className="about__img">
          <img className="img--malay" src="./astronaunthao.png" alt="" />
        </div>

        <div className="about__title">
          <h2 className="about__subtitle">I'm Hao</h2>
          <p className="about__text">
            My name is Hao. I'm 22 years old. I was born in Bac Lieu city but
            now i'm living in Ho Chi Minh City. I graduated from University of
            Greenwich. My major is Infomation Technology. But i'm very
            interested in Front-End work. Maybe part of me also like the beauty,
            so i want to make interface more beautiful and modern. From the time
            I graduated to now, I have always been studying so that I can
            improve my professional skills higher and higher.
          </p>
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default About;
