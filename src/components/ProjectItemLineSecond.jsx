import React, { useRef, useState } from "react";
import Modal from "./home/modal/Modal";
import { useScroll, motion } from "framer-motion";

const ProjectItemLineSecond = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1 "],
  });
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  return (
    <>
      {/* <!-- Project 3--> */}
      <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
        className="project__demo--item"
      >
        <div className="project__demo--image">
          <img
            className="demo--item-img"
            src="./haohaomovie.png"
            alt="haohaoMovie"
          />
        </div>
        <div className="project__demo--content">
          <div className="project__demo--content--title"></div>
          <div className="project__demo--content--description">
            <h3 className="description--title">HaoHao Cinema</h3>
            <div className="wrapp-technology">
              <span className="wrapp--title">- Technologies: </span>
              HTML, CSS, JavaScript, ReactJS, Firebase,...
            </div>
            <div className="wrapp-function">
              <span className="wrapp--title">- Function: </span>
              Animation, Responsive, Search, Login, Register,...
            </div>
          </div>
          <div className="project__demo--content--view">
            <button className="button-view" onClick={() => setShowModal3(true)}>
              <img
                className="img-qrcode js-qrcode3"
                src="./qrcodemovie.png"
                alt="qrcodeMovie"
              />
            </button>
            <Modal
              open={showModal3}
              handleClose={() => setShowModal3(false)}
              image="qrcodemovie.png"
            ></Modal>
            <a
              href="https://ngotrieuhao.github.io/HaoHaoMovie/#"
              className="link-view"
              rel="noreferrer"
              target="_blank"
            >
              <svg className="svg-view" width="277" height="62">
                <defs>
                  <linearGradient id="grad1">
                    <stop offset="0%" stopColor="#FF8282" />
                    <stop offset="100%" stopColor="#E178ED" />
                  </linearGradient>
                </defs>
                <rect
                  x="5"
                  y="5"
                  rx="25"
                  fill="none"
                  stroke="url(#grad1)"
                  width="266"
                  height="50"
                ></rect>
              </svg>
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* <!-- Project 4 --> */}
      <motion.div
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
        className="project__demo--item"
      >
        <div className="project__demo--image">
          <img
            className="demo--item-img"
            src="./haoweather.png"
            alt="haohaoWeather"
          />
        </div>
        <div className="project__demo--content">
          <div className="project__demo--content--title"></div>
          <div className="project__demo--content--description">
            <h3 className="description--title">HaoHao Weather</h3>
            <div className="wrapp-technology">
              <span className="wrapp--title">- Technologies: </span>
              HTML, CSS, JavaScript,...
            </div>
            <div className="wrapp-function">
              <span className="wrapp--title">- Function: </span>
              Responsive, Weather API
            </div>
          </div>
          <div className="project__demo--content--view">
            <button className="button-view" onClick={() => setShowModal4(true)}>
              <img
                className="img-qrcode js-qrcode4"
                src="./qrcodeweather.png"
                alt="qrcodeWeather"
              />
            </button>
            <Modal
              open={showModal4}
              handleClose={() => setShowModal4(false)}
              image="qrcodeweather.png"
            ></Modal>
            <a
              href="https://ngotrieuhao.github.io/HaoWeather/"
              className="link-view"
              rel="noreferrer"
              target="_blank"
            >
              <svg className="svg-view" width="277" height="62">
                <defs>
                  <linearGradient id="grad1">
                    <stop offset="0%" stopColor="#FF8282" />
                    <stop offset="100%" stopColor="#E178ED" />
                  </linearGradient>
                </defs>
                <rect
                  x="5"
                  y="5"
                  rx="25"
                  fill="none"
                  stroke="url(#grad1)"
                  width="266"
                  height="50"
                ></rect>
              </svg>
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProjectItemLineSecond;
