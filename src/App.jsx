import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import InventureLandingPage from './components/InventureLandingPage';

function App() {
  useEffect(() => {
    // Initialize Facebook Pixel
    (function(f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function() {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js'));
    fbq('init', '402489472754224');
    fbq('track', 'PageView');
  }, []);

  return (
    <Routes>
      <Route path="/" element={<InventureLandingPage />} />
      {/* Add more routes here as needed */}
    </Routes>
  );
}

export default App;
