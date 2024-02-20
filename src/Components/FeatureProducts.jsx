import d from '../assets/download.png'
import p1 from '../assets/p1.webp'


const FeatureProducts = () => {
    return (
        <div className='my-20 max-w-7xl mx-auto px-2'>
            <h1 className="text-center text-[#69BFF1] md:text-3xl text-xl">Featured Products</h1>
            <div className="flex justify-center items-center">
                <img className='' src={d} alt="" />
            </div>

            {/* products   */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
                <div className='shadow hover:shadow-2xl  rounded'>
                    <img src={p1} alt="" />
                    <hr />
                    <div className='p-4 bg-[#FEF2F8]'>
                        <h1 className='text-center text-xl text-[#FC82BD]'>Baby Play Sets</h1>
                        <h1 className='text-center text-xl text-[#69BFF1]'>$500</h1>
                    </div>
                </div>
                <div className='shadow hover:shadow-2xl  rounded'>
                    <img src={p1} alt="" />
                    <hr />
                    <div className='p-4 bg-[#FEF2F8]'>
                        <h1 className='text-center text-xl text-[#FC82BD]'>Baby Play Sets</h1>
                        <h1 className='text-center text-xl text-[#69BFF1]'>$500</h1>
                    </div>
                </div>
                <div className='shadow hover:shadow-2xl  rounded'>
                    <img src={p1} alt="" />
                    <hr />
                    <div className='p-4 bg-[#FEF2F8]'>
                        <h1 className='text-center text-xl text-[#FC82BD]'>Baby Play Sets</h1>
                        <h1 className='text-center text-xl text-[#69BFF1]'>$500</h1>
                    </div>
                </div>
                <div className='shadow hover:shadow-2xl  rounded'>
                    <img src={p1} alt="" />
                    <hr />
                    <div className='p-4 bg-[#FEF2F8]'>
                        <h1 className='text-center text-xl text-[#FC82BD]'>Baby Play Sets</h1>
                        <h1 className='text-center text-xl text-[#69BFF1]'>$500</h1>
                    </div>
                </div>
          
            </div>

        </div>
    );
};

export default FeatureProducts;