import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-container">
          <h1 className="logo">Elite Contracting</h1>
          <nav>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Construction. Renovation. Restoration.</h2>
        <p>Serving all five boroughs of NYC with precision and pride.</p>
        <a href="#" className="btn">Request a Quote</a>
      </div>
    </section>
  );
}

function About() {
  return <div style={{ padding: "4rem" }}><h2>About Us</h2><p>Details about the company.</p></div>;
}

function Services() {
  return <div style={{ padding: "4rem" }}><h2>Services</h2><p>What we offer.</p></div>;
}

function Gallery() {
  return <div style={{ padding: "4rem" }}><h2>Gallery</h2><p>Photos of our work.</p></div>;
}

function Contact() {
  return <div style={{ padding: "4rem" }}><h2>Contact</h2><p>How to reach us.</p></div>;
}

export default App;
