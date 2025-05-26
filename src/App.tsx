import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import EventSpotlight from './components/EventSpotlight';
import SignupForm from './components/SignupForm';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="relative min-h-screen bg-slate-900 text-white overflow-hidden">
      <BackgroundAnimation />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <EventSpotlight />
          <SignupForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;