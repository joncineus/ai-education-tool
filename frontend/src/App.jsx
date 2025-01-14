import Courses from "./( pages )/Courses"
import Home from "./( pages )/Home"
import Quiz from "./( pages )/Quiz"
import NavigationBar from "./NavigationBar"
import Community from "./( pages )/Community"
import Chat from "./( pages )/Chat"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {

  return (
    <Router>
      <NavigationBar /> {/* This is the NavigationBar component, keep it here it always exist here */}
      <div className="content"> {/* This is the content div, all the pages will be rendered here */}
        <Routes>
          <Route exact path="/" element={<Home/>}></Route> {/* This is the Home page */}
          <Route exact path="/courses" element={<Courses/>} ></Route> {/* This is the Courses page */}
          <Route exact path="/quiz" element={<Quiz/>}></Route> {/* This is the Quiz page */}
          <Route exact path="/community" element={<Community/>}></Route>
          <Route path="*" element={<h1>404 Not Found</h1>}></Route>
          <Route exact path="/study-assistant" element={<Chat/>}></Route>
          <Route exact path="/premiumtheme" element={<h1>Premium Theme</h1>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
