import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../Components/Loading";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location1 = useLocation();

    if (loading) {
        return <Loading />;
    }

    if (!user) {
        Swal.fire("Error!", "You have to log in first before checking out.", "error");
        // Navigate to the login page
        return <Navigate state={{ from: location1 }} to="/login" replace />;
    }

    return children;
};

export default PrivateRoute;
