import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0E0E0E] text-white selection:bg-teal-400/30 selection:text-white font-inter">
      {/* Background grid / subtle texture */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.06]" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <Navbar />
      <Hero />
      <Sections />
      <Footer />
    </div>
  );
}

export default App;
