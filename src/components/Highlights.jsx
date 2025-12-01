import React from 'react'

function Highlights() {
  const bullets = [
    {t:'Camera-Ready Presence', d:'Comfortable with close-ups, motion shots, and expressive portraits.'},
    {t:'Ethnic Specialisation', d:'Strong fit for bridal, festive, and culturally rooted visuals.'},
    {t:'Professional Mindset', d:'On time, prepared, collaborative, and adaptable on set.'},
    {t:'Versatile Expression', d:'From soft, dreamy looks to confident, powerful frames.'},
  ]
  return (
    <div className="section beige highlights">
      <div className="container">
        <h2>Why Work With Me</h2>
        <p style={{marginTop:'.5rem'}}>
          From concept moodboards to day-of coordination, I bring calm, clarity, and a refined aesthetic to every detail—so your story shines through each frame.
          I style your look and your venue theme with the artistic eye-so your entire wedding feels cohensive,stunning, and unforgottable.”We plan from what you wear to set to your venue with a beatiful theme.”
          I collaborate closely with your planner, photographer, and glam team to keep timelines smooth and every moment magazine-worthy.
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
        <div className="stats">
          <div className="stat">+9 Concept Shoots</div>
          <div className="stat">+7 Collaborations</div>
          <div className="stat">3 Cities Worked In</div>
        </div>
      </div>
    </div>
  )
}

export default Highlights
