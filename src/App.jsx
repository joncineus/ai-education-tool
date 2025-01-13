import { Breadcrumb } from "./component/Breadcrumb"
import Header from "./component/Header"
import Footer from "./component/Footer"
import {CourseList} from "./component/CourseList"
import CourseFilter from "./component/Filter"

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Courses", href: "/courses" }]} />
      </div>
      <div className="container mx-auto px-4 flex">
        <CourseList />
        <CourseFilter />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App