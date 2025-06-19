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
    <h2 className="fade-loop">Construction. Renovation. Restoration.</h2>
    <p>Serving all five boroughs of NYC with precision and pride.</p>
    <a href="#" className="btn">Request a Quote</a>
  </div>
</section>



<section className="about">
  <div className="about-content">
    <h2>About Us</h2>
    <p>
      Elite Contracting is a full-service construction company serving all five boroughs of New York City. 
      From brownstone renovations to full apartment remodels, our team delivers high-quality craftsmanship 
      and reliable service on every project.
    </p>
    <p>
      We pride ourselves on transparency, communication, and a deep understanding of NYC building codes and 
      property types. Whether it’s a small upgrade or a large-scale renovation, we bring your vision to life — on time and on budget.
    </p>
  </div>
</section>

export default App;
