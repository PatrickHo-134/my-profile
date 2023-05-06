import "./App.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/icofont/icofont.min.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/venobox/venobox.css";
import "./assets/vendor/owl.carousel/assets/owl.carousel.min.css";
import "./assets/vendor/aos/aos.css";

import About from "./components/about";
import Skills from "./components/skills";
import Hero from "./components/hero";
import Resume from "./components/resume";
import Blogs from "./components/blogs";

function App() {
  return (
    <div>
      <Hero></Hero>
      <div id="main">
        <About></About>
        <Skills></Skills>
        <Resume></Resume>
        <Blogs></Blogs>
      </div>
    </div>
  );
}

export default App;
