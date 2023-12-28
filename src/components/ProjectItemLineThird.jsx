import React, { useRef, useState } from "react";
import Modal from "./home/modal/Modal";
import { useScroll, motion } from "framer-motion";

const ProjectItemLineThird = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1 "],
  });
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  return (
    <>
      {/* <!-- Project 5 --> */}
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
            src="./eyesrolling.png"
            alt="eyeSrolling"
          />
        </div>
        <div className="project__demo--content">
          <div className="project__demo--content--title"></div>
          <div className="project__demo--content--description">
            <h3 className="description--title">Eyes Rolling</h3>
            <div className="wrapp-technology">
              <span className="wrapp--title">- Technologies: </span>
              HTML, CSS, JavaScript,...
            </div>
            <div className="wrapp-function">
              <span className="wrapp--title">- Function: </span>
              Responsive, Mousemove
            </div>
          </div>
          <div className="project__demo--content--view">
            <button className="button-view" onClick={() => setShowModal5(true)}>
              <img
                className="img-qrcode js-qrcode5"
                src="./qrcodeeyes.png"
                alt="qrcodeEyes"
              />
            </button>
            <Modal
              open={showModal5}
              handleClose={() => setShowModal5(false)}
              image="qrcodeeyes.png"
            ></Modal>
            <a
              href="https://ngotrieuhao.github.io/EyesRolling/"
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

      {/* <!-- Project 6 --> */}
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
            src="./smokeandparallax.png"
            alt="smoke&parallax"
          />
        </div>
        <div className="project__demo--content">
          <div className="project__demo--content--title"></div>
          <div className="project__demo--content--description">
            <h3 className="description--title">Smoke & Parallax</h3>
            <div className="wrapp-technology">
              <span className="wrapp--title">- Technologies: </span>
              HTML, CSS, JavaScript,...
            </div>
            <div className="wrapp-function">
              <span className="wrapp--title">- Function: </span>
              Responsive, Parallax, Smoke Text,...
            </div>
          </div>
          <div className="project__demo--content--view">
            <button className="button-view" onClick={() => setShowModal6(true)}>
              <img
                className="img-qrcode js-qrcode6"
                src="./qrcodesmoke.png"
                alt="qrcodesmoke"
              />
            </button>
            <Modal
              open={showModal6}
              handleClose={() => setShowModal6(false)}
              image="qrcodesmoke.png"
            ></Modal>
            <a
              href="https://ngotrieuhao.github.io/webEffect/"
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

export default ProjectItemLineThird;
