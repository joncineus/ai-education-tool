import Courses from "./( pages )/Courses"
import Home from "./( pages )/Home"
import Quiz from "./( pages )/Quiz"
import NavigationBar from "./NavigationBar"
import Community from "./( pages )/Community"
import Footer from "./( components )/Footer"
import StudyAssistant from "./( pages )/StudyAssistant"
import Login from "./( pages )/Login"
import ErrorPage from "./( pages )/Error"
import FAQ from "./( pages )/FAQs"
import Chat from "./( pages )/Chat"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {

  return (
    <Router>
      <NavigationBar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/courses" element={<Courses/>} ></Route>
          <Route exact path="/quiz" element={<Quiz/>}></Route>
          <Route exact path="/community" element={<Community/>}></Route>
          <Route exact path="/study-assistant" element={<StudyAssistant/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
          <Route exact path="/faq" element={<FAQ/>}></Route>
          <Route exact path="/chat" element={<Chat/>}></Route>
          <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
