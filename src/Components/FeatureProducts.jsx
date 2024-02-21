import { Link, useLoaderData } from 'react-router-dom';
import d from '../assets/download.png'
import ReactStars from "react-rating-stars-component";


const FeatureProducts = () => {
    const data = useLoaderData([])
    // console.log(data);


    return (
        <div className='my-20 max-w-7xl mx-auto px-2'>
            <h1 className="text-center text-[#69BFF1] md:text-3xl text-xl">Featured Products</h1>
            <div className="flex justify-center items-center">
                <img className='' src={d} alt="" />
            </div>

            {/* products   */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">

                {data.map(item => (
                    <Link to={`/v1/productDetail/${item._id}`} key={item._id} className='shadow hover:shadow-2xl  rounded'>
                        <img src={item.img} alt="" />
                        <hr />
                        <div className='p-4 bg-[#FEF2F8]'>
                            <h1 className='text-center text-xl text-[#FC82BD]'>{item.name}</h1>
                            <h1 className='text-center text-xl text-[#69BFF1]'>{item.price}</h1>
                            <div className='flex justify-center'>
                                <ReactStars
                                    count={item.rating}

                                    size={24}
                                    isHalf={true}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#FEEB26"
                                    // color='#FEEB26'
                                />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
};

export default FeatureProducts;