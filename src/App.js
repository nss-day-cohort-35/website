import React from 'react';
import StudentList from './Components/Students/StudentList'
import HeroCard from './Components/PageContent/HeroCard'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/PageContent/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroCard />
      <StudentList />
      <Footer />
    </div>
  );
}

export default App;
