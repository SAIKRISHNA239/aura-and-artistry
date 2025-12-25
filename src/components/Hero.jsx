import React from 'react'

function Hero() {
  const handleError = (e) => {
    e.currentTarget.src =
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1200"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#4B164C"/><stop offset="1" stop-color="#C89B3C"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-family="Poppins, Arial" font-size="28">Vala Sahasra</text></svg>`
      )
  }
  return (
    <div className="section container hero">
      <div>
        <div className="eyebrow">Ethnic & Lifestyle Muse</div>
        <h1>Elegance in Every Frame. Grace in Every Moment.</h1>
        <p className="sub">We help brands, photographers, and event creators bring their stories to life through expressive, elegant visuals — especially in ethnic and festive spaces.</p>
        <div className="hero-actions">
          <button className="btn" onClick={()=>document.getElementById('portfolio')?.scrollIntoView({behavior:'smooth'})}>View Portfolio</button>
          <button className="btn outline" onClick={()=>document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>Let’s Collaborate</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="portrait-wrap">
          <div className="portrait-bg"></div>
          <img className="portrait" src="/images/vala-hero.jpg" alt="Vala Sahasra portrait" onError={handleError} />
          <div className="float-tag">⭐ Featured in ethnic & bridal concepts</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
