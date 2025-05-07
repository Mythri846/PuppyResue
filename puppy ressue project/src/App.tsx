import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TreatmentCentersPage from './pages/TreatmentCentersPage';
import EmergencyPage from './pages/EmergencyPage';
import CareTipsPage from './pages/CareTipsPage';
import ReportPage from './pages/ReportPage';
import VolunteerPage from './pages/VolunteerPage';
import SuccessStoriesPage from './pages/SuccessStoriesPage';
import DonationPage from './pages/DonationPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/centers" element={<TreatmentCentersPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/care-tips" element={<CareTipsPage />} />
            <Route path="/report" element={<ReportPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/donate" element={<DonationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;