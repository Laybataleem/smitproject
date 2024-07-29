// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import MainPage from './Components/MainPage';
import Announcement from './Components/MainPages/Announcement';
import ShowStudent from './Components/MainPages/ShowStudent'
import StudentCreate  from './Components/MainPages/StudentSubmit'
import ShowResult  from './Components/MainPages/progress'

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/showStu" element={<ShowStudent />}/>
        <Route path="/StudentCreate" element={< StudentCreate />}/>
        <Route path="/showProgess" element={< ShowResult />}/> 

      </Routes>
    </Router>
    // <div>
    // <QuizResult/>
    // </div>
  );
}




export default App;
// rule 1 for post what is you schema for our case  firstname,lastname,email,password
// rule 2 arrange you data like it 
//as per schema:asper variable
// put urd sent data in axios after link host 
// rule 3  correct you connect link asper your relative path
// anydesk pr thori bulaa tha mne apko smj niayega me kia krhi qu k mjhy khud smj ni arha ome apki work krti hui chezy apni is file me dal rhi apne itni fikes bnai hui h login signup qu ni chlrha apka bna hova to h mne abhi dekha means form hini arha 
