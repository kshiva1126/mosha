import Header from '../components/Header';
import MainVisual from '../modules/MainVisual';
import About from '../modules/About';
import Courses from '../modules/Courses';
import Contact from '../modules/Contact';

export default function Home() {
  return (
    <>
      <Header/>
      <MainVisual/>
      <About/>
      <Courses/>
      <Contact/>
    </>
  )
}
