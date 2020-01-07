import React from 'react';
import StudentList from './Components/Students/StudentList'
import HeroCard from './Components/PageContent/HeroCard'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/PageContent/NavBar'
import GroupThanksCard from './Components/PageContent/GroupThanksCard'
import TechCard from './Components/PageContent/TechCard';

/*


      <TechCard />

      */
function App() {
  return (
    <>
      <NavBar />
      <HeroCard />
      <StudentList />

      <GroupThanksCard />
      <Footer />
    </>
  );
}

export default App;
