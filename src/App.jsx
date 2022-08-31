import { Fragment } from 'react';
import Nav from './components/navigation/Nav';
import Header from './components/header/Header';
import About from './components/main/about/About';
import Skills from './components/main/skills/Skills';
import Work from './components/main/work/Work';
import Contact from './components/main/contact/Contact';
import Footer from './components/footer/Footer';

import './index.css';

function App() {  
  return (
    <Fragment>
      <Nav />
      <Header />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </Fragment>
  )
}

export default App
