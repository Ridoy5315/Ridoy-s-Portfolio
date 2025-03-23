import React from 'react';
import AboutMe from '../../Components/about/AboutMe';
import Skills from '../../Components/skills/Skills';
import Education from '../../Components/education/Education';
import Projects from '../../Components/projects/Projects';
import ContactInformation from '../../Components/Contact/ContactInformation';
import Footer from '../../Components/Shared/footer/Footer';

const Home = () => {
     return (
          <div className=''>
               <AboutMe></AboutMe>
               <Skills></Skills>
               <Projects></Projects>
               <ContactInformation></ContactInformation>
               <Footer></Footer>
          </div>
     );
};

export default Home;