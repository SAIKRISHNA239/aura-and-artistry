import React from 'react'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:'1rem',flexWrap:'wrap'}}>
        <div>© {year} Vala Sahasra. All rights reserved.</div>
        <div style={{display:'flex',gap:'1rem'}}>
          <a href="#">Instagram</a>
          <a href="mailto:valasahasrarao@gmail.com">Email</a>
          <span style={{opacity:.7}}>Designed in krishna.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
