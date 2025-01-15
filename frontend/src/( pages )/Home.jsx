import Categories from "../( components )/Categories"
import Footer from "../( components )/Footer"
import HeroSection from "../( components )/Hero"
import NavigationBar from "../NavigationBar"

function Home() {

  return (
    <>
    <NavigationBar />
    <HeroSection />
    <section className="p-10 max-w-7xl justify-center mx-auto">
      <Categories />
    </section>
    <Footer />
    </>
  )
}

export default Home
