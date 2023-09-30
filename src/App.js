import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
//import LoginPage from './pages/LoginPage';
//import DashboardPage from './pages/DashboardPage';
//import ProfilePage from './pages/ProfilePage';
//import MailboxPage from './pages/MailboxPage';
//import RegistrationComponent from './components/Registration';
//import DPAlter1 from './pages/DPAlter1';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  return (
      <HashRouter base="/">
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </div>
      </HashRouter>
  );
}

export default App;
