import { useLoaderData, useParams } from "react-router-dom";


const ProductDetal = () => {
    const data = useLoaderData([])
    // console.log(data);

    const { id } = useParams()
    // console.log(id);

    const filterData = data?.find(item => item._id === id)
    console.log(filterData);

    const {name, price, rating, brand, dsc, img} = filterData || {} ;


    return (
        <div>
            <section className="overflow-hidden bg-white py-11 font-poppins">
        <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
            <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 md:w-1/2 ">
                    <div className="sticky top-0 z-0 overflow-hidden ">
                        <div className="relative mb-6 lg:mb-10 lg:h-2/4  ">
                            <img src="https://i.postimg.cc/PqYpFTfy/pexels-melvin-buezo-2529148.jpg" alt=""
                                className="object-cover w-full lg:h-full rounded-md "/>
                        </div>
                        
                    </div>
                </div>
                <div className="w-full px-4 md:w-1/2 ">
                    <div className="lg:pl-20">
                        <div className="mb-8 ">
                            <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                                Brand Name: {brand}
                             </span>
                            <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold text-gray-500 md:text-4xl">
                                Product Name: {name}</h2>
                            <div className="flex items-center mb-6">
                                <ul className="flex mr-2">
                                   {/* rating  */}
                                </ul>
                                <p className="text-xs dark:text-gray-400 ">(2 customer reviews)</p>
                            </div>
                            <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                               {dsc}
                            </p>
                            <p className="inline-block mb-8 text-4xl font-bold text-gray-500  ">
                                <span>Price: ${price}</span>
                               
                            </p>
                            <p className="text-green-500 font-bold ">7 in stock</p>
                        </div>
                    
                       
                        <div className="w-32 mb-8 ">
                            <label for=""
                                className="w-full text-xl font-semibold text-gray-700 dark:text-gray-400">Quantity</label>
                            <div className="relative flex flex-row w-full h-10 mt-4 bg-transparent rounded-lg">
                                <button
                                    className="w-20 h-full text-gray-600 bg-gray-300 rounded-l outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-400">
                                    <span className="m-auto text-2xl font-thin">-</span>
                                </button>
                                <input type="number"
                                    className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-300 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                                    placeholder="1"/>
                                <button
                                    className="w-20 h-full text-gray-600 bg-gray-300 rounded-r outline-none cursor-pointer dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-400">
                                    <span className="m-auto text-2xl font-thin">+</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center -mx-4 ">
                            <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                <button
                                    className="btn bg-[#FEEB26] w-full text-md font-bold">
                                    Add to Cart
                                </button>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default ProductDetal;