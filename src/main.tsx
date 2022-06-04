import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Dashboard } from './layouts/Dashboard';
import { Home } from './pages/Home';
import './global.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Dashboard>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Dashboard>
    </BrowserRouter>
  </StrictMode>,
);
