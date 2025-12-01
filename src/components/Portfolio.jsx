import React from 'react'

const items = [
  { key:'ethnic',  title:'Ethnic Elegance', img:'/images/portfolio-ethnic.jpg',  desc:'Rich traditional looks, lehengas, sarees, and festive outfits with warm lighting and expressive eyes.' },
  { key:'festive', title:'Festive Nights',  img:'/images/portfolio-festive.jpg', desc:'Night-time outdoor shoots with fairy lights, soft bokeh, and cinematic warmth.' },
  { key:'modern',  title:'Modern Grace',   img:'/images/portfolio-modern.jpg',  desc:'Clean lines, subtle poses, and contemporary outfits with minimal backgrounds.' },
  { key:'candid',  title:'Candid Moments', img:'/images/portfolio-candid.jpg', desc:'Natural laughter, genuine reactions, and in-between moments that feel unscripted.' },
]

function Portfolio() {
  const ph = 'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#4B164C"/><stop offset="1" stop-color="#C89B3C"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>`
  )
  return (
    <div className="section dark portfolio">
      <div className="container">
        <h2 style={{color:'#fff'}}>Portfolio</h2>
        <p style={{opacity:.9, margin:'0 0 1rem'}}>A glimpse of moods I bring to the frame.</p>
        <div className="grid">
          {items.map(i=> (
            <div className="card" key={i.key}>
              <img src={i.img} alt={i.title} loading="lazy" decoding="async" onError={(e)=>{e.currentTarget.src=ph}} />
              <div className="overlay">View More</div>
              <div className="content">
                <div className="title">{i.title}</div>
                <div className="desc">{i.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
