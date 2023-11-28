import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Banner from './components/Banner.jsx'
import Error from './components/Error.jsx'
import CardComponent from './components/Card.jsx'
import Banner2 from './components/Banner2.jsx'
import Collapse from './components/Collapse.jsx'
import SlideComponent from './components/Slideshow.jsx';
import CarrouselComponent from './components/Carrousel.jsx'


function AppRouter() {

  return(
    <Router basename="/Projet8">
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='*' element={<Error404 />}/>
            <Route path='about' element={<About />}/>
            <Route path="/logement/:id" element={<Slide />} />

            </Routes>
            </Router>
        );
}

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <CardComponent />
      <Footer />
    </div>
  );
};

function Slide() {
  return (
    <div>
      <Header />
      <CarrouselComponent/>
      <SlideComponent />
      <Footer />
    </div>
  );
};


function Error404() {
  return (
    <div>
      <Header />
      <Error />
      <Footer />
    </div>
  );
};

function About() {
  return (
    <div>
      <Header />
      <Banner2 />
      <Collapse />
      <Footer />
    </div>
  );
};

export default AppRouter;