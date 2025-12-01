import React from 'react'

function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <header className="navbar">
      <div className="container inner">
        <div style={{fontFamily:'Playfair Display, serif', fontWeight:700, letterSpacing:'.02em'}}>Vala Sahasra</div>
        <nav className="nav-links">
          <a href="#home" onClick={(e)=>{e.preventDefault();scrollTo('home')}}>Home</a>
          <a href="#about" onClick={(e)=>{e.preventDefault();scrollTo('about')}}>About</a>
          <a href="#portfolio" onClick={(e)=>{e.preventDefault();scrollTo('portfolio')}}>Portfolio</a>
          <a href="#highlights" onClick={(e)=>{e.preventDefault();scrollTo('highlights')}}>Highlights</a>
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact')}}>Contact</a>
        </nav>
        <button className="btn outline cta" onClick={()=>scrollTo('contact')}>Book a Shoot</button>
      </div>
    </header>
  )
}

export default Navbar
