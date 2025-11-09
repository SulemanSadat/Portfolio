import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import './i18n';
import App from './App';
import RedirectToLanguage from './components/RedirectToLanguage'; // Import it

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RedirectToLanguage />} />
        <Route path="/en/*" element={<App lang="en" />} />
        <Route path="/fa/*" element={<App lang="fa" />} />
        <Route path="*" element={<App lang="en" />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
