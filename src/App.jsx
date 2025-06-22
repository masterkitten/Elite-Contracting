function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="nav-container">
          <h1 className="logo">Elite Contracting</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Construction. Renovation. Restoration.</h2>
          <p>Serving all five boroughs of NYC with precision and pride.</p>
          <a href="#" className="btn">Request a Quote</a>
        </div>
      </section>

      <div style={{ background: 'green', padding: '80px', textAlign: 'center', color: '#fff' }}>
        <h2>Test Block</h2>
        <p>This confirms your site is rendering after the hero section.</p>
      </div>
    </div>
  );
}

export default App;
