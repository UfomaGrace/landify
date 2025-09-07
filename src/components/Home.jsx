
import Journey from '../components/Journey'
import About from '../components/About'
import Testimonial from '../components/Testimonial'
import Features from '../components/Features'
import Services from '../components/Services'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'



function Home() {
  return (
    <div>
      <Navbar />
      <Journey />
      <About />
      <Features />
      <Testimonial />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home