import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="flex justify-center items-center max-w-7xl mx-auto h-[500px]">
                <div>
                    <h1 className="text-center text-md ">Oops</h1>
                    <h1 className="text-center text-4xl font-bold text-red-600 ">404</h1>
                    <Link to={'/'}>Back to home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;