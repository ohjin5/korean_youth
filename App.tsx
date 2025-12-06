import React from 'react';
import Header from './components/Header';
import Invitation from './components/Invitation';
import Program from './components/Program';
import Members from './components/Members';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen relative overflow-x-hidden selection:bg-gold selection:text-white">
      <Header />
      <Invitation />
      <Program />
      <Members />
      <Gallery />
      <Location />
      <Footer />
      
      {/* Sticky Music Player Button (Simulated) */}
      <div className="fixed bottom-6 right-6 z-50 animate-pulse">
        <button className="w-12 h-12 rounded-full bg-gold/90 backdrop-blur-sm shadow-lg text-white flex items-center justify-center hover:scale-110 transition-transform">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18V5l12-2v13"></path>
            <circle cx="6" cy="18" r="3"></circle>
            <circle cx="18" cy="16" r="3"></circle>
          </svg>
        </button>
      </div>
    </main>
  );
};

export default App;