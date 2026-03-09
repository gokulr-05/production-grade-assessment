import { Routes, Route } from 'react-router-dom';
import Login from '../../pages/Login';
import ProtectedRoute from '../auth/ProtectedRoute.tsx';
import Dashboard from '../../pages/Dashboard';

function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/"
        element={<div className="text-blue-600">Exam Portal</div>}
      />
    </Routes>
  );
}

export default AppRouter;
