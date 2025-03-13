import React from 'react';
import AboutMe from '../../Components/about/AboutMe';
import Skills from '../../Components/skills/Skills';
import Education from '../../Components/education/Education';
import Projects from '../../Components/projects/Projects';

const Home = () => {
     return (
          <div>
               <AboutMe></AboutMe>
               <Skills></Skills>
               <Projects></Projects>
               
          </div>
     );
};

export default Home;