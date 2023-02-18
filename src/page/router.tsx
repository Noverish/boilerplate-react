import { createBrowserRouter } from 'react-router-dom';
import Index from './index';

export const router = createBrowserRouter([
  { path: '*', element: <Index /> },
]);

export const routes = {
  counter: '/counter',
  form: '/form',
}
