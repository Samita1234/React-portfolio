import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Service from "./components/service/service";
import "./App.css";
import Experience from "./components/experience/experience";
import Portfolio from "./components/portfolio/portfolio";
import Footer from "./components/footer/footer";
import Contact from "./components/contact/contact";
// import { useContext } from "react";
// import { themeContext } from "./Context";
function App() {
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;
  return (
    // <div
    //   className="App"
    //   style={{
    //     background: darkMode ? "black" : "",
    //     color: darkMode ? "white" : "",
    //   }}
    // >
    <div className="App">
      <Navbar />
      <Intro />
      <Service />
      <Experience />
      <Portfolio/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
