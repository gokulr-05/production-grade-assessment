import { Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={<div className="text-blue-600">Exam Portal</div>}
      />
    </Routes>
  );
}

export default AppRouter;
