import React from 'react';
import { Navigate } from 'react-router-dom';

const RedirectToLanguage = () => {
  const userLang = navigator.language.startsWith('fa') ? 'fa' : 'en';
  return <Navigate to={`/${userLang}`} replace />;
};

export default RedirectToLanguage;
