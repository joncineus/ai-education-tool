import Articles from "../( components )/Articles"
import Categories from "../( components )/Categories"
import FeaturedCourses from "../( components )/Features"
import Feedback from "../( components )/Feedback"
import Footer from "../( components )/Footer"
import HeroSection from "../( components )/Hero"
import Statistics from "../( components )/Statistics"

function Home() {

  return (
    <>
    <HeroSection />
    <section className="p-10 max-w-7xl justify-center mx-auto">
      <Categories />
    </section>
    </>
  )
}

export default Home
