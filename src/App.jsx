import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Highlights from './components/Highlights'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.title = 'Aura & Artistry — Wedding Styling Portfolio'
  }, [])
  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  useEffect(() => {
    const targets = document.querySelectorAll('.section, .card, .hl, .tcard')
    targets.forEach(t => t.classList.add('reveal'))
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          io.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    targets.forEach(t => io.observe(t))
    // Make anything already in view visible immediately
    targets.forEach(t => {
      const r = t.getBoundingClientRect()
      if (r.top < window.innerHeight * 0.9) t.classList.add('visible')
    })
    return () => io.disconnect()
  }, [])

  return (
    <div>
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="portfolio"><Portfolio /></section>
        <section id="highlights"><Highlights /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  )
}

export default App
