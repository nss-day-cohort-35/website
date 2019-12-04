import React from 'react';
import StudentList from './Components/Students/StudentList'
import HeroCard from './Components/PageContent/HeroCard'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/PageContent/NavBar'
import GroupThanksCard from './Components/PageContent/GroupThanksCard'
import TechCard from './Components/PageContent/TechCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroCard />
      <StudentList />
      <TechCard />
      <GroupThanksCard />
      <Footer />
    </div>
  );
}

export default App;
