import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const NotFoundPage = lazy(() => import('src/page/common/NotFoundPage'));
const CounterPage = lazy(() => import('src/page/counter/CounterPage'));

export default function Index() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Navigate to="/counter" />} />
      <Route path="/counter" element={<CounterPage />} />
    </Routes>
  );
}
