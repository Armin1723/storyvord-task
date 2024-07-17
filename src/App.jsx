import About from "./components/About"
import CallToAction from "./components/CallToAction"
import Features from "./components/Features"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"
import Story from "./components/Story"
import ContactUs from "./components/ContactUs"
import ThemeToggle from "./components/ThemeToggle"
import WhyGocpt from "./components/WhyGocpt"
import Footer from "./components/Footer"

function App() {

  return (
    <main className='w-screen custom-scrollbar text-white font-[jura] relative'>
      <ThemeToggle/>
      <Navbar />
      <HomePage />
      <Features />
      <About />
      <Story />
      <WhyGocpt />
      <CallToAction />
      <ContactUs />
      <Footer />
    </main>
  )
}

export default App
