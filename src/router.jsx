import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Process from './pages/Process';
import Nutrition from './pages/Nutrition';
import Contact from './pages/Contact';

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
                { path: 'nutrition', element: <Nutrition /> },
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