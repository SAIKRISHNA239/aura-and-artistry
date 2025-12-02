import React from 'react'

function Testimonials() {
  const t = [
    {q:'“Vala has a very natural presence on camera. Her expressions and body language made our ethnic campaign feel classy and warm.”', img:'/images/testimonial-1.jpg'},
    {q:'“Elegant and effortless. She brought a cinematic warmth to our festive concept shoot.”', img:'/images/testimonial-2.jpg'},
  ]
  const ph = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#F7E6EB"/><stop offset="1" stop-color="#EAD7F2"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>`
  )
  return (
    <div className="section light testimonials">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="grid" style={{marginTop:'1rem'}}>
          {t.map((x,i)=> (
            <div className="tcard" key={i}>
              {x.img && (
                <img src={x.img} alt={`Testimonial ${i+1}`} loading="lazy" decoding="async" onError={(e)=>{e.currentTarget.src=ph}} style={{width:'100%',height:'auto',borderRadius:'12px',marginBottom:'.75rem'}} />
              )}
              <p>{x.q}</p>
              <div className="tmeta">{x.a}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
