import "./App.css";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/icofont/icofont.min.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/venobox/venobox.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BootstrapQuestions from "./components/blogs/bootstrapQuestions";
import Main from "./components/main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/common_questions_in_bootstrap"
          element={<BootstrapQuestions />}
        />
        <Route
          path="/my-profile"
          element={<Main />}
        />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
