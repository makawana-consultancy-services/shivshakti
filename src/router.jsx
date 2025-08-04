import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Process from './pages/Process';
import Contact from './pages/Contact';
import Nutrients from './pages/Nutrients';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                { index: true, element: <Home /> },
                { path: 'about', element: <About /> },
                { path: 'products', element: <Products /> },
                { path: 'process', element: <Process /> },
                { path: 'nutrients', element: <Nutrients /> },
                { path: 'contact', element: <Contact /> },
            ],
        },
    ],
    {
        future: {
            v7_startTransition: true,
        },
    }
);

export default router;