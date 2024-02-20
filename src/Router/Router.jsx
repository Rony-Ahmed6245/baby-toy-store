
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import AddProduct from '../pages/AddProduct';
import MyCart from '../pages/MyCart';
import Login from '../pages/Login';

const router = createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/addProduct',
                element:<AddProduct></AddProduct>,
            },
            {
                path:'/myCart',
                element:<MyCart></MyCart>
            },
            {
                path:'/login',
                element:<Login></Login>,
            }
        ]
    }
])

export default router;