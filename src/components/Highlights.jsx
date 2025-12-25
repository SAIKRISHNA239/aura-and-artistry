import React from 'react'

function Highlights() {
  const bullets = [
    {t:'Camera-Ready Presence', d:'Every detail is thoughtfully designed to look stunning on camera — from décor and outfits to moments that feel natural, joyful, and unforgettable.'},
    {t:'Ethnic Specialisation', d:'Specialising in weddings, pre-wedding rituals, and festive celebrations rooted in tradition, culture, and timeless elegance.'},
    {t:'Professional Mindset', d:'From concept to execution, we work with precision, punctuality, and clear coordination — ensuring a stress-free and seamless celebration.'},
    {t:'Versatile Expression', d:'Whether it’s a soft, elegant vibe or a bold, grand celebration, we adapt our creativity to match your vision perfectly.'},
  ]
  return (
    <div className="section beige highlights">
      <div className="container">
        <h2>Why Work With Us</h2>
        <p style={{marginTop:'.5rem'}}>
          From concept moodboards to day-of coordination, We bring calm, clarity, and a refined aesthetic to every detail—so your story shines through each frame.
          We style your look and your venue theme with the artistic eye-so your entire wedding feels cohensive,stunning, and unforgottable.”We plan from what you wear to set to your venue with a beatiful theme.”
          We collaborate closely with your planner, photographer, and glam team to keep timelines smooth and every moment magazine-worthy.
          <br/>
          <strong>“WE PLAN,YOU PARTY”</strong>
        </p>
        <div className="grid" style={{marginTop:'1rem'}}>
          {bullets.map((b,i)=> (
            <div className="hl" key={i}>
              <h3 style={{marginBottom:'.4rem'}}>{b.t}</h3>
              <p>{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Highlights
