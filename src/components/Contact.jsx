import React from 'react'
import { HiOutlineEnvelope, HiOutlinePaperAirplane } from 'react-icons/hi2'
import { FaInstagram } from 'react-icons/fa'

function Contact() {
  return (
    <div className="section contact" style={{background:'linear-gradient(180deg, #faf7f8, #f3ebe8)'}}>
      <div className="container wrap">
        <div style={{display:'flex',flexDirection:'column'}}>
          <h2>Let’s Create Something Beautiful</h2>
          <p>Share your concept, mood, and requirements. I’ll get back to you with availability and next steps.</p>
          <div className="details" style={{marginTop:'1rem'}}>
            <div style={{display:'flex',alignItems:'center',gap:'.5rem'}}>
              <HiOutlineEnvelope style={{color:'var(--plum)'}}/>
              <a href="mailto:valasahasrarao@gmail.com">valasahasrarao@gmail.com</a>
            </div>
            <div style={{marginTop:'.6rem',display:'flex',alignItems:'center',gap:'.5rem'}}>
              <a
                href="https://instagram.com/valasahasra"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Instagram @valasahasra"
                title="Instagram"
                style={{display:'inline-flex',alignItems:'center',color:'var(--plum)'}}
              >
                <FaInstagram style={{fontSize:20}}/>
              </a>
              <span style={{opacity:.8}}>@valasahasra</span>
            </div>
          </div>
          <a
            className="btn gold"
            style={{marginTop:'auto', marginBottom:'1.25rem'}}
            href="https://wa.me/918186936266?text=Hi%20Vala%2C%20I%27d%20like%20to%20book%20a%20shoot."
            target="_blank"
            rel="noreferrer"
          >
            Book on WhatsApp
          </a>
        </div>
        <div>
          <form className="form" onSubmit={(e)=>e.preventDefault()}>
            <div style={{display:'grid',gap:'.25rem'}}>
              <input className="input" placeholder="Name" />
              <input className="input" placeholder="Brand / Photographer / Event Type" />
              <input className="input" placeholder="Email" type="email" />
              <textarea className="textarea" placeholder="Message / Concept Description"></textarea>
              <button className="btn" type="submit"><HiOutlinePaperAirplane style={{marginRight:6}}/> Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
