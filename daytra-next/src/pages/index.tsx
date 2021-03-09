import Header from '../components/Header';
import MainVisual from '../modules/MainVisual';
import About from '../modules/About';
import Courses from '../modules/Courses';
import Contact from '../modules/Contact';
import Footer from '../modules/Footer';

export default function Home() {
  return (
    <>
      <Header/>
      <MainVisual/>
      <About/>
      <Courses/>
      <Contact/>
      <Footer/>
    </>
  )
}
