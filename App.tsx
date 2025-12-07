import React from 'react';
import Header from './components/Header';
import Invitation from './components/Invitation';
import Program from './components/Program';
import Members from './components/Members';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

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
      
      {/* Floating Music Player */}
      <MusicPlayer />
    </main>
  );
};

export default App;