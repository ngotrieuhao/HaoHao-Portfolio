import { createContext, Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Intro from "./components/Loading/Intro";
import HomePage from "./page/HomePage";
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(false);
  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    setLoading(true);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);
  return (
    <Fragment>
      {loading ? (
        <Intro loading={loading}></Intro>
      ) : (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className="App" id={theme}>
            <Routes>
              <Route path="/" exact element={<HomePage></HomePage>}></Route>
            </Routes>
          </div>
          {theme === "light" ? <div className="overlay"></div> : ""}
        </ThemeContext.Provider>
      )}
    </Fragment>
  );
}

export default App;
