import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Jobs from './Pages/ApplyForJobs/Jobs.jsx';
import Homepage from './Pages/home/Homepage.jsx';
import Login from './Pages/login/Login.jsx';

function App() {

  console.log("I am in App");
  return (
    
    <div>
     
      <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/ApplyForJobs" element={<Jobs/>}/>
      </Routes>
      
    </div>


  );
}



export default App;
