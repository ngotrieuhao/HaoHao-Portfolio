import React, { useContext } from "react";
import { Link } from "react-scroll";
import ReactSwitch from "react-switch";
import { ThemeContext } from "../../App";

const Introduce = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <div className="absolute flex flex-col wrapp__icon-toggle left-16">
          <div className="w-36 favicon--cursor">
            <a href="/#">
              <img src="./faviconhome.png" alt="favicon" />
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8 ml-2">
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#eeeeee"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#1E90FF"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                  clipRule="evenodd"
                />
              </svg>
            )}

            <ReactSwitch
              onChange={toggleTheme}
              checked={theme === "light"}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor="#4169E1"
              className=""
            />

            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FFD700"
                className="w-10 h-10"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#eeeeee"
                className="w-10 h-10"
              >
                <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
              </svg>
            )}
          </div>
        </div>

        <h1 className="home__title">
          Hi,
          <br />
          I'm <span className="home__title-color">Hao</span>
          <br />
          I'm a Front-End
          <br />
          <span>Developer</span>
        </h1>
        {theme === "light" ? (
          <img className="my__img" src="./aboutme2.jpg" alt="aboutme" />
        ) : (
          <img className="my__img" src="./aboutme.jpg" alt="aboutme" />
        )}
      </div>
      <div className="home__button--contact">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-20}
          duration={1200}
          className="cursor-pointer button--contact"
        >
          Contact
        </Link>
        <a
          href="./url/Ngo-Trieu-Hao.pdf"
          download="Ngo-Trieu-Hao-Front-End"
          className="button--cv"
        >
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Introduce;
