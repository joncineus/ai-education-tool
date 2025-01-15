import Categories from "../( components )/Categories"
import Footer from "../( components )/Footer"
import HeroSection from "../( components )/Hero"
import NavigationBar from "../NavigationBar"

function Home() {

  return (
    <>
    <NavigationBar />
    <HeroSection />
      <Categories />
    <Footer />
    </>
  )
}

export default Home
