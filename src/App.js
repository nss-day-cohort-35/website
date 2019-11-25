import React from 'react';
import StudentList from './Components/Students/StudentList'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/PageContent/NavBar'
import GroupThanksCard from './Components/PageContent/GroupThanksCard'
import TechCard from './Components/PageContent/TechCard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <StudentList />
      <GroupThanksCard />
      <TechCard />
      <Footer />
    </div>
  );
}

export default App;
