function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-container">
          <h1 className="logo">Elite Contracting</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Construction. Renovation. Restoration.</h2>
          <p>Serving all five boroughs of NYC with precision and pride.</p>
          <a href="#contact" className="btn">Request a Quote</a>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          We’re a full-service contracting company based in NYC, handling everything from brownstone renovations to apartment remodels.
        </p>
      </section>

      <section id="services" className="services">
        <h2>Services</h2>
        <ul>
          <li>Brownstone Renovations</li>
          <li>Full Home Remodeling</li>
          <li>General Contracting</li>
        </ul>
      </section>

      <section id="gallery" className="gallery">
        <h2>Gallery</h2>
        <p>Gallery content coming soon...</p>
      </section>

      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email: elitecontractingnyc@gmail.com</p>
      </section>
    </div>
  )
}

export default App

