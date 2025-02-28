import "@radix-ui/colors/gold.css";
import "@radix-ui/colors/gold-dark.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Projet from "./pages/Projet";
import "./styles/app.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projet/:id" element={<Projet />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
