function App() {
  return (
    <div className="app">
      <header className="navbar">
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
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2 className="fade-loop">NYC’s Trusted Construction Partner</h2>
          <p>Delivering quality craftsmanship for over a decade.</p>
          <a href="#" className="btn">Request a Quote</a>
        </div>
      </section>
    </div>
  );
}

export default App;
