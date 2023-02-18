import { createBrowserRouter } from 'react-router-dom';
import Index from './index';

const router = createBrowserRouter([
  { path: '*', element: <Index /> },
]);

export default router;
