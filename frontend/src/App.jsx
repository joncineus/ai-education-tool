import Courses from "./( pages )/Courses"
import Home from "./( pages )/Home"
import Quiz from "./( pages )/Quiz"
import NavigationBar from "./NavigationBar"
import Community from "./( pages )/Community"

function App() {

  return (
    <>
      <NavigationBar /> {/* This is the NavigationBar component, keep it here it always exist here */}
      <Community /> {/* This is the Home component, keep it here it always exist here */}
    </>
  )
}

export default App
