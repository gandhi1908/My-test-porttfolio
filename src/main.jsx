import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const photos = [
  { title: 'Quiet Forms', place: 'Puglia, Italy · 2024', src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1800&q=85', wide: true },
  { title: 'Low Tide', place: 'North Sea · 2023', src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85' },
  { title: 'The Last Light', place: 'Marrakech, Morocco · 2022', src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=85' },
  { title: 'Blue Hour', place: 'Reykjavík, Iceland · 2024', src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1400&q=85' },
  { title: 'After Rain', place: 'Kyoto, Japan · 2021', src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1400&q=85' },
  { title: 'Open Country', place: 'Montana, USA · 2023', src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1800&q=85', wide: true },
];

function App() {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="site-shell">
    <header className="nav"><a className="wordmark" href="#top">MARA<span>VALE</span></a><nav className={menuOpen ? 'nav-links open' : 'nav-links'}><a href="#work" onClick={()=>setMenuOpen(false)}>Selected work</a><a href="#about" onClick={()=>setMenuOpen(false)}>About</a><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></nav><button className="menu" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu"><span></span><span></span></button></header>
    <main id="top">
      <section className="hero"><div className="hero-copy"><p className="eyebrow">Photographer · Director · Visual storyteller</p><h1>Stories found<br/><em>in the in-between.</em></h1><p className="hero-intro">I make images about place, memory and the quiet charge of being human.</p><a className="arrow-link" href="#work">Explore the work <span>↘</span></a></div><div className="hero-image"><img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=85" alt="A solitary figure walking beside a hazy coast"/><div className="image-note">01 / 06<br/><span>North Atlantic, 2024</span></div></div><div className="scroll-cue">Scroll to explore <span>↓</span></div></section>
      <section className="manifesto" id="about"><p className="eyebrow">A note from the field</p><div className="manifesto-grid"><h2>Every frame is a<br/><em>place to linger.</em></h2><div><p className="large-copy">My work lives between documentary and dreamscape. I photograph the edges of things — landscapes in transition, faces that hold their own weather, the small details that stay with us long after we leave.</p><p className="small-copy">Available for editorial, commissioned and cultural projects worldwide.</p></div></div></section>
      <section className="work" id="work"><div className="section-top"><div><p className="eyebrow">Selected work</p><h2>Recent observations</h2></div><p className="section-count">06 / 24</p></div><div className="gallery">{photos.map((photo, i)=><button className={'photo-card '+(photo.wide?'wide':'')} key={photo.title} onClick={()=>setActive(photo)}><img src={photo.src} alt={photo.title}/><span className="photo-meta"><strong>{photo.title}</strong><small>{photo.place}</small></span><span className="plus">+</span></button>)}</div></section>
      <section className="statement"><div className="statement-mark">MV</div><div><p className="eyebrow">The approach</p><p className="quote">“I am drawn to the pause before a story becomes certain.”</p><p className="small-copy">The camera is a way of paying attention. Slow down, look again, let the frame breathe.</p></div></section>
      <section className="contact" id="contact"><p className="eyebrow">Let’s make something with room to breathe.</p><h2>Have a story<br/><em>in mind?</em></h2><a className="contact-link" href="mailto:studio@maravale.co">studio@maravale.co <span>↗</span></a><div className="contact-foot"><span>Based between London & everywhere</span><span>© 2024 Mara Vale</span><span>Instagram ↗</span></div></section>
    </main>
    {active && <div className="lightbox" onClick={()=>setActive(null)}><button className="close" aria-label="Close">×</button><img src={active.src} alt={active.title}/><div className="lightbox-caption"><strong>{active.title}</strong><span>{active.place}</span></div></div>}
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
