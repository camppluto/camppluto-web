import { useEffect, useState, useRef } from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import { useOnScreen } from "./hooks/useOnScreen"
import Loader from "./components/Loader/Loader"
import { useLockedBody } from "./hooks/useLockedBody"
import FAQ from "./components/FAQ/FAQ"
import Roadmap from "./components/Roadmap/Roadmap"
import Team from "./components/Team/Team"

function App() {
  const [loading, setLoading] = useState(true)
  const [, setLocked] = useLockedBody(true)
  const [scrollTo, setScrollTo] = useState(null)
  const heroRef = useRef(null)
  const roadmapRef = useRef(null)
  const faqRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const teamRef = useRef(null)

  const heroScreen = useOnScreen(heroRef)
  const roadmapScreen = useOnScreen(roadmapRef)
  const aboutScreen = useOnScreen(aboutRef)
  const faqScreen = useOnScreen(faqRef)
  const teamScreen = useOnScreen(teamRef)
  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, [])

  const refMapping = {
    "#roadmap": roadmapRef,
    "#about": aboutRef,
    "#contact": contactRef,
    "#faq": faqRef,
    "#team": teamRef,
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setLocked(false)
    }, 3000)
  })

  useEffect(() => {
    if (scrollTo) {
      refMapping[scrollTo]?.current?.scrollIntoView({
        behavior: "smooth",
      })
      setScrollTo(false)
    }
  }, [scrollTo])

  const handleLinkClick = to => {
    setScrollTo(to)
  }

  return (
    <main>
      <Loader className={loading ? "" : "hide-loader"} />
      <Header onLinkClick={handleLinkClick} />
      <div className="main-wrapper">
        <Hero ref={heroRef} onScreen={heroScreen && !loading} />
        <About ref={aboutRef} onScreen={aboutScreen && !loading} />
        <Roadmap ref={roadmapRef} onScreen={roadmapScreen && !loading} />
        <FAQ ref={faqRef} onScreen={faqScreen && !loading} />
        <Team ref={teamRef} onScreen={teamScreen && !loading} />
        <Footer />
      </div>
    </main>
  )
}

export default App
