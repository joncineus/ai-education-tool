import Courses from "./( pages )/Courses";
import Home from "./( pages )/Home";
import Quiz from "./( pages )/Quiz";
import Community from "./( pages )/Community";
import Login from "./( pages )/Login";
import ErrorPage from "./( pages )/Error";
import FAQ from "./( pages )/FAQs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatInterface from "./( pages )/AIChat";
import AddNewClass from "./( pages )/AddNewClass";

function App() {
  return (
    <Router>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/quiz" element={<Quiz />} />
          <Route exact path="/community" element={<Community />} /> 
          <Route exact path="/study-assistant" element={<ChatInterface />} /> 
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/faq" element={<FAQ />} />
          <Route exact path="/create-course" element={<AddNewClass />} />
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
