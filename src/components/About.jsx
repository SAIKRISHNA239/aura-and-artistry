import React from 'react'
import { HiOutlineMapPin, HiOutlineCamera, HiOutlineSparkles, HiOutlineUserGroup } from 'react-icons/hi2'

function About() {
  return (
    <div className="section light">
      <div className="container about-grid">
        <div>
          <h2>About Us</h2>
          <p>“We don’t just make stand in front of the camera — We makecarry a mood.</p>
          <p>We craft ethnic and festive looks where subtle gestures—a smile, a glance, the fall of a dupatta—transform the frame.</p>
          <p>We love working with photographers, designers, wedding planners and brands who value culture, elegance, and emotion in their visuals.”</p>
        </div>
        <div>
          <div className="kv-grid">
            <div className="kv"><span className="icon"><HiOutlineMapPin/></span><div><strong>Based in:</strong> <span>Hyderabad, India</span></div></div>
            <div className="kv"><span className="icon"><HiOutlineCamera/></span><div><strong>Ideal for:</strong> Bridal, festive, lifestyle & event concepts</div></div>
            <div className="kv"><span className="icon"><HiOutlineSparkles/></span><div><strong>Styles:</strong> Ethnic, Indo-western, elegant fusion, minimal modern</div></div>
            <div className="kv"><span className="icon"><HiOutlineUserGroup/></span><div><strong>Collabs:</strong> Open to shoots, campaigns & social media partnerships</div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
