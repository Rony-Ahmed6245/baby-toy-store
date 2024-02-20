import { NavLink } from "react-router-dom";


const Nav = () => {
    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/addProduct'>Add Product</NavLink>
            <NavLink to='/myCart'> My Cart</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </div>
    );
};

export default Nav;