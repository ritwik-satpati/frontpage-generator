
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BodySection } from './components/BodySection/BodySection';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <BodySection />
      <Footer />
    </BrowserRouter>

  );
}

export default App;
