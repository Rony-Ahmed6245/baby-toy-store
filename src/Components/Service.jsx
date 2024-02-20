
import { FaShippingFast } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { GiBlackHoleBolas } from "react-icons/gi";

const Service = () => {
    return (
        <div>
            <div className="bg-[#F7F7F7] py-10">
                <div className='max-w-7xl mx-auto px-2'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                        <div className="flex md:justify-center justify-start items-center gap-3">
                            <FaShippingFast className="text-4xl text-[#69BFF1]" />
                            <div className="">
                                <h1 className='text-lg font-bold text-balck'> Free Shipping</h1>
                                <h1 className='text-sm text-gray-500'> Free shipping on all UK orders</h1>
                            </div>
                        </div>
                        <div className="flex  md:justify-center justify-start gap-3">
                            <GiReceiveMoney className="text-4xl text-[#69BFF1]" />
                            <div className="">
                                <h1 className='text-lg font-bold  text-balck'>
                                    Money Guarantee
                                </h1>
                                <h1 className='text-sm text-gray-500'> We are guarantee to your money</h1>
                            </div>
                        </div>
                        <div className="flex  md:justify-center justify-start gap-3">
                            <MdSupportAgent className="text-4xl text-[#69BFF1]" />
                            <div className="">
                                <h1 className='text-lg font-bold  text-balck'>
                                    Premium Support
                                </h1>
                                <h1 className='text-sm text-gray-500'> 24 Hour online Support</h1>
                            </div>
                        </div>
                        <div className="flex  md:justify-center justify-start gap-3">
                            <GiBlackHoleBolas className="text-4xl text-[#69BFF1]" />

                            <div className="">
                                <h1 className='text-lg font-bold text-balck'>Black Friday
                                </h1>
                                <h1 className='text-sm text-gray-500'>Shocking discount on every</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;