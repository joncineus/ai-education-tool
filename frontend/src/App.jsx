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

function App() {

  return (
    <>
      <NavigationBar /> {/* This is the NavigationBar component, keep it here it always exist here */}
      <FAQ /> {/* This is the Home component, keep it here it always exist here */}
      <Footer />
    </>
  )
}

export default App
