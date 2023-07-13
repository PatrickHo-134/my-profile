import "./App.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/icofont/icofont.min.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/venobox/venobox.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Blog20230712 from "./components/blogs/convertHtmlTemplateToReact";
import Blog20230315 from "./components/blogs/resizableTextarea";
import Blog20220623 from "./components/blogs/bootstrapQuestions";
import Blog20220218 from "./components/blogs/mistakeWithSelectQuery";
import Blog20220130 from "./components/blogs/dataValidation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blog_20230712" element={<Blog20230712 />} />
        <Route path="/blog_20230315" element={<Blog20230315 />} />

        <Route path="/blog_20220623" element={<Blog20220623 />} />

        <Route path="/blog_20220218" element={<Blog20220218 />} />

        <Route path="/blog_20220130" element={<Blog20220130 />} />

        <Route path="/my-profile" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
