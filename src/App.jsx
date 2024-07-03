import React, { useEffect } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import InventureLandingPage from './components/InventureLandingPage';
import { initFacebookPixel, trackPageView } from './utils/fbPixel';

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView();
  }, [location]);

  return null;
};

function App() {
  useEffect(() => {
    initFacebookPixel();
  }, []);

  return (
    <>
      <PageTracker />
      <Routes>
        <Route path="/" element={<InventureLandingPage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </>
  );
}

export default App;
