import React, { useRef, useState } from "react";
import Modal from "./modal/Modal";
import { useScroll, motion } from "framer-motion";
import ProjectItemLineSecond from "../ProjectItemLineSecond";
import ProjectItemLineThird from "../ProjectItemLineThird";

const Project = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1 "],
  });
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  return (
    <section className="project section">
      <motion.h2
        ref={ref}
        style={{
          scale: scrollYProgress,
          opacity: scrollYProgress,
        }}
        className="section-title"
      >
        Projects
      </motion.h2>
      <div className="wrapp-project__demo--items">
        {/* <!-- Project 1--> */}
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
              src="./haohaoblog.png"
              alt="haohaoBlog"
            />
          </div>
          <div className="project__demo--content">
            <div className="project__demo--content--title"></div>
            <div className="project__demo--content--description">
              <h3 className="description--title">HaoHao Blog</h3>
              <div className="wrapp-technology">
                <span className="wrapp--title">- Technologies: </span>
                ReactJS, TailwindCSS, SASS,...
              </div>
              <div className="wrapp-function">
                <span className="wrapp--title">- Function: </span>
                Create, update, delete, view posts,....
              </div>
            </div>
            <div className="project__demo--content--view">
              <button
                className="button-view"
                onClick={() => setShowModal(true)}
              >
                <img
                  className="img-qrcode js-qrcode"
                  src="./qrcodeblog.png"
                  alt="qrcodeBlog"
                />
              </button>
              <Modal
                open={showModal}
                handleClose={() => setShowModal(false)}
                image="qrcodeblog.png"
              ></Modal>
              <a
                href="https://haohaoblog.vercel.app/"
                rel="noreferrer"
                target="_blank"
                className="link-view"
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
        {/* <!-- Project 2--> */}
        <motion.div
          ref={ref}
          style={{
            scale: scrollYProgress,
            opacity: scrollYProgress,
          }}
          className="project__demo--item"
        >
          <div className="project__demo--image">
            <img className="demo--item-img" src="./banner.png" alt="Banner" />
          </div>
          <div className="project__demo--content">
            <div className="project__demo--content--title"></div>
            <div className="project__demo--content--description">
              <h3 className="description--title">HaoHao Shop</h3>
              <div className="wrapp-technology">
                <span className="wrapp--title">- Technologies: </span>
                ReactJS, Tailwind CSS, TypeScript,...
              </div>
              <div className="wrapp-function">
                <span className="wrapp--title">- Function: </span>
                Sign up, Login, Responsive, Zoom image,...
              </div>
            </div>
            <div className="project__demo--content--view">
              <button
                className="button-view"
                onClick={() => setShowModal2(true)}
              >
                <img
                  className="img-qrcode js-qrcode2"
                  src="./haohaoshop.png"
                  alt="qrcode"
                />
              </button>
              <Modal
                open={showModal2}
                handleClose={() => setShowModal2(false)}
                image="haohaoshop.png"
              ></Modal>
              <a
                href="https://haohaoshop.vercel.app/"
                rel="noreferrer"
                target="_blank"
                className="link-view"
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
        <ProjectItemLineSecond />
        <ProjectItemLineThird />
      </div>
    </section>
  );
};

export default Project;
