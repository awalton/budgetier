import { AppProvider } from './context/Provider';
import { Routes, Route } from 'react-router-dom';
/* Pages */
import Splash from './pages/splash/Splash';

import './App.css';

export const App = () => {
  return (
    <AppProvider>
      <Routes>
        <Route path="/" element={<Splash />} />
      </Routes>
    </AppProvider>
  );
};
