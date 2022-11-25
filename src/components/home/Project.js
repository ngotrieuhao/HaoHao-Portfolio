import React, { useState } from "react";
import Modal from "./modal/Modal";

const Project = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);

  return (
    <section className="project section">
      <h2 className="section-title">Projects</h2>
      <div className="wrapp-project__demo--items">
        {/* <!-- Project 1--> */}
        <div className="project__demo--item">
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
              <a href="https://haohaoblog.vercel.app/" className="link-view">
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
        </div>
        {/* <!-- Project 2--> */}
        <div className="project__demo--item">
          <div className="project__demo--image">
            <img className="demo--item-img" src="./banner.png" alt="Banner" />
          </div>
          <div className="project__demo--content">
            <div className="project__demo--content--title"></div>
            <div className="project__demo--content--description">
              <h3 className="description--title">Shoes Store</h3>
              <div className="wrapp-technology">
                <span className="wrapp--title">- Technologies: </span>
                HTML, CSS, JavaScript,...
              </div>
              <div className="wrapp-function">
                <span className="wrapp--title">- Function: </span>
                Animation, Responsive, Zoom image,...
              </div>
            </div>
            <div className="project__demo--content--view">
              <button
                className="button-view"
                onClick={() => setShowModal2(true)}
              >
                <img
                  className="img-qrcode js-qrcode2"
                  src="./qr-code.png"
                  alt="qrcode"
                />
              </button>
              <Modal
                open={showModal2}
                handleClose={() => setShowModal2(false)}
                image="qr-code.png"
              ></Modal>
              <a
                href="https://ngotrieuhao.github.io/HaoHaoStore/"
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
        </div>

        {/* <!-- Project 3--> */}
        <div className="project__demo--item">
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
              <button
                className="button-view"
                onClick={() => setShowModal3(true)}
              >
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
        </div>

        {/* <!-- Project 4 --> */}
        <div className="project__demo--item">
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
              <button
                className="button-view"
                onClick={() => setShowModal4(true)}
              >
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
        </div>

        {/* <!-- Project 5 --> */}
        <div className="project__demo--item">
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
              <button
                className="button-view"
                onClick={() => setShowModal5(true)}
              >
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
        </div>

        {/* <!-- Project 6 --> */}
        <div className="project__demo--item">
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
              <button
                className="button-view"
                onClick={() => setShowModal6(true)}
              >
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
        </div>
      </div>
    </section>
  );
};

export default Project;
