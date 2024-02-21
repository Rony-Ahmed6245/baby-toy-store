import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { RxUpdate } from "react-icons/rx";


const MyCart = () => {
    const { user } = useContext(AuthContext)
    // console.log(user.email);
    // DATA 
    const data = useLoaderData([])
    // console.log(data);

    const filterItem = data?.filter(item => item?.userEmail == user?.email)
    console.log(filterItem);

    const totalPrice = filterItem?.reduce((acc, item) => Number(acc) + Number(item.price), 0);
console.log(totalPrice);

    
    return (
        <div>
            <div className="bg-gray-100 h-screen py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-3/4">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left font-semibold uppercase">Product</th>
                                            <th className="text-left font-semibold uppercase">Price</th>
                                           
                                            <th className="text-center font-semibold uppercase">Update</th>
                                            <th className="text font-semibold text-center uppercase">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            filterItem.map(item => (
                                                <tr>
                                                    <td className="py-4">
                                                        <div className="flex items-center">
                                                            <img className="h-16 w-16 mr-4" src={item.img} alt="Product image"/>
                                                            <span className="text-[#69BFF1] font-semibold">{item.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-4">${item.price}</td>
                                                   
                                                    <td className="py-4 flex justify-center items-center mt-7"><RxUpdate /></td>
                                                    <td className="py-4 text-center text-[#FC82BD] font-extrabold ">X</td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="md:w-1/4">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                                <div className="flex justify-between mb-2">
                                    <span>Total items</span>
                                    <span>{filterItem.length}</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Taxes</span>
                                    <span>$00.00</span>
                                </div>
                                <div className="flex justify-between mb-2">
                                    <span>Shipping</span>
                                    <span>$00.00</span>
                                </div>

                                <div className="flex justify-between mb-2">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">${totalPrice}.00</span>
                                </div>
                                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyCart;