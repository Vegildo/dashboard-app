import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardPrincipal from './pages/DashboardPrincipal';
import DashboardModelo from './pages/DashboardModelo';

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPrincipal />} />
        <Route path="/modelo/:id" element={<DashboardModelo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
