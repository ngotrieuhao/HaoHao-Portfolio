import React, { Fragment } from "react";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Experience from "../components/home/Experience";
import Footer from "../components/home/Footer";
import Introduce from "../components/home/Introduce";
import Project from "../components/home/Project";
import Skills from "../components/home/Skills";
import ScrollToTop from "react-scroll-to-top";

import { motion, useScroll } from "framer-motion";

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  return (
    <Fragment>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Introduce></Introduce>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
      <ScrollToTop smooth className="pl-[6px]" />
    </Fragment>
  );
};

export default HomePage;
