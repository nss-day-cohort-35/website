import React from 'react';
import StudentList from './Components/Students/StudentList'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/PageContent/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar />
      <StudentList />
      <Footer />
    </div>
  );
}

export default App;
