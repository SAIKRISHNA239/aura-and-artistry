import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { HiOutlineEnvelope, HiOutlinePaperAirplane } from 'react-icons/hi2'
import { FaInstagram } from 'react-icons/fa'

function Contact() {
  const [form, setForm] = useState({ name:'', brand:'', email:'', message:'' })
  const [status, setStatus] = useState({ sending:false, ok:null, msg:'' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status.sending) return
    setStatus({ sending:true, ok:null, msg:'' })
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      await emailjs.send(serviceId, templateId, {
        from_name: form.name,
        from_email: form.email,
        brand: form.brand,
        message: form.message,
      }, { publicKey })
      setStatus({ sending:false, ok:true, msg:'Thanks! Your message has been sent.' })
      setForm({ name:'', brand:'', email:'', message:'' })
    } catch (err) {
      setStatus({ sending:false, ok:false, msg:'Something went wrong. Please try again or email me directly.' })
    }
  }
  return (
    <div className="section contact" style={{background:'linear-gradient(180deg, #faf7f8, #f3ebe8)'}}>
      <div className="container wrap">
        <div style={{display:'flex',flexDirection:'column'}}>
          <h2>Let’s Create Something Beautiful</h2>
          <p>Share your concept, mood, and requirements. We’ll get back to you with availability and next steps.</p>
          <div className="details" style={{marginTop:'1rem'}}>
            <div style={{display:'flex',alignItems:'center',gap:'.5rem'}}>
              <HiOutlineEnvelope style={{color:'var(--plum)'}}/>
              <a href="mailto:auraandartistry@gmail.com">auraandartistry@gmail.com</a>
            </div>
             <div style={{marginTop:'.6rem',display:'flex',alignItems:'center',gap:'.5rem'}}>
              <a
                href="https://www.instagram.com/auranartistry/"
                target="_blank"
                rel="noreferrer"
                aria-label="Open Instagram @auranartistry"
                title="Instagram"
                style={{display:'inline-flex',alignItems:'center',color:'var(--plum)', textDecoration:'none'}}
              >
                <FaInstagram style={{fontSize:20}}/>
                <span style={{marginLeft:'.5rem', opacity:.8}}>@auranartistry</span>
              </a>
            </div>
          </div>
          <a
            className="btn gold"
            style={{marginTop:'auto', marginBottom:'1.25rem'}}
            href="https://wa.me/918019197388?text=Hi%20Vala%2C%20I%27d%20like%20to%20book%20a%20shoot."
            target="_blank"
            rel="noreferrer"
          >
            Book on Slot
          </a>
        </div>
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <div style={{display:'grid',gap:'.25rem'}}>
              <input className="input" name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
              <input className="input" name="brand" value={form.brand} onChange={handleChange} placeholder="Brand / Photographer / Event Type" />
              <input className="input" name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" required />
              <textarea className="textarea" name="message" value={form.message} onChange={handleChange} placeholder="Message / Concept Description" required></textarea>
              <button className="btn" type="submit" disabled={status.sending}>
                <HiOutlinePaperAirplane style={{marginRight:6}}/>
                {status.sending ? 'Sending…' : 'Send'}
              </button>
              {status.msg && (
                <div style={{marginTop:'.25rem', color: status.ok ? 'green' : 'crimson'}}>{status.msg}</div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
