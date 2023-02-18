import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { routes } from './router';

const NotFoundPage = lazy(() => import('src/page/common/NotFoundPage'));
const CounterPage = lazy(() => import('src/page/counter/CounterPage'));
const FormPage = lazy(() => import('src/page/form/FormPage'));

export default function Index() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/" element={<Navigate to={routes.counter} />} />
      <Route path={routes.counter} element={<CounterPage />} />
      <Route path={routes.form} element={<FormPage />} />
    </Routes>
  );
}
