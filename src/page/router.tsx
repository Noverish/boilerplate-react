import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import ErrorBoundary from 'src/page/common/ErrorBoundary';
import NotFoundPage from 'src/page/common/NotFoundPage';
import routes from './routes';

const CounterPage = lazy(() => import('src/page/counter/CounterPage'));
const FormPage = lazy(() => import('src/page/form/FormPage'));
const ErrorGeneratePage = lazy(() => import('src/page/error/ErrorGeneratePage'));
const ProductSearchPage = lazy(() => import('src/page/product/ProductSearchPage'));

const router = createBrowserRouter([
  {
    errorElement: <ErrorBoundary />,
    children: [
      { path: '*', element: <NotFoundPage /> },
      { path: '/', element: <Navigate to={routes.counter} /> },
      { path: routes.counter, element: <CounterPage /> },
      { path: routes.form, element: <FormPage /> },
      { path: routes.error, element: <ErrorGeneratePage /> },
      { path: routes.product.search, element: <ProductSearchPage /> },
    ],
  },
], { basename: '/boilerplate-react' });

export default router;
