
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import AddProduct from '../pages/AddProduct';
import MyCart from '../pages/MyCart';
import Login from '../pages/Login';
import ProductDetal from '../pages/ProductDetal';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path:'/',
        element: <App></App>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=> fetch('http://localhost:3000/v1/babyProducts')
            },
            {
                path:'/addProduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
            },
            {
                path:'/myCart',
                element:<MyCart></MyCart>
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/v1/productDetail/:id',
                element:<PrivateRoute><ProductDetal></ProductDetal></PrivateRoute>,
                loader:()=> fetch('http://localhost:3000/v1/babyProducts')
            }
        ]
    }
])

export default router;