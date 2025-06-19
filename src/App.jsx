import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-[#f5f5f5] to-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Elite Contracting</h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-6">
          Quality Craftsmanship Across NYC
        </p>
        <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Request a Quote
        </button>
      </section>
    </div>
  );
}

export default App;
