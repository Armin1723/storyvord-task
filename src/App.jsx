import About from "./components/About"
import Features from "./components/Features"
import HomePage from "./components/HomePage"
import Navbar from "./components/Navbar"
import Story from "./components/Story"

import ThemeToggle from "./components/ThemeToggle"
import WhyGocpt from "./components/WhyGocpt"

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
    </main>
  )
}

export default App
