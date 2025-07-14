import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CustomersPage from './pages/CustomersPage';
import LotsPage from './pages/LotsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/customers" replace />} />
        <Route path="/customers" element={<CustomersPage />} />
        <Route path="/lots" element={<LotsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
