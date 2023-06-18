import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

function AppRouter() {
  return(
    <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='logement' element={<Logement />}/>
            <Route path='*' element={<Error404 />}/>
            <Route path='about' element={<About />}/>
        </Routes>
    </Router>
    );
}
function Home() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

function Logement() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

function Error404() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};

function About() {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
};
export default AppRouter;