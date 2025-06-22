function App() {
  return (
    <div className="app">
      <header className="navbar">
        <h1 className="logo">Elite Contracting</h1>
        <nav>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h2>Construction. Renovation. Restoration.</h2>
        <p>Serving all five boroughs of NYC with precision and pride.</p>
        <a href="#contact" className="btn">Request a Quote</a>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>
          Elite Contracting is your trusted partner for residential and commercial construction projects in New York City. 
          From historic brownstone renovations to modern apartment remodels, we bring decades of experience and a passion for quality.
        </p>
      </section>

      <section id="services">
        <h2>Our Services</h2>
        <ul>
          <li>Brownstone Renovations</li>
          <li>Full Home Remodeling</li>
          <li>Kitchen & Bathroom Upgrades</li>
          <li>Flooring, Tiling, and Painting</li>
        </ul>
      </section>

      <section id="gallery" className="gallery">
        <h2>Project Gallery</h2>
        <p>Showcasing our latest renovations and transformations across NYC. (Gallery coming soon.)</p>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <p>Email: elitecontractingnyc@gmail.com</p>
        <p>Phone: (555) 123-4567</p>
        <p>Based in New York City — serving all 5 boroughs</p>
      </section>
    </div>
  );
}

export default App;
