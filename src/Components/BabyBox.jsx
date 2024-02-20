
import b1 from '../assets/b1.webp'
import b2 from '../assets/b2.webp'
const BabyBox = () => {
    return (
        <div>
            
            <div className="max-w-7xl mx-auto px-2 my-10">
                <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">
                    <div className="border-8 border-[#FC82BD] rounded relative">
                        <img src={b1} alt="" />
                        <div className="absolute md:top-1/3 top-1/4 right-0 transform translate-y-(-1/2)">
                            <h1 className="md:mr-10 md:text-4xl text-2xl mr-5 text-[#FC82BD]">Only your <br /> <span className="text-[#69BFF1]">Love is Purer</span> </h1>
                            <button className="btn bg-[#FEEB26] rounded mt-5">Shop Now</button>
                        </div>

                    </div>
                    <div className="border-8 border-[#69BFF1] rounded relative">
                        <img src={b2} alt="" />
                        <div className="absolute md:top-1/3 top-1/4 right-0 transform translate-y-(-1/2)">
                            <h1 className="md:mr-5 md:text-4xl text-2xl mr-5 text-[#FC82BD]">Baby Care
                                <br /> <span className="text-[#69BFF1]">Campaign Idea</span> </h1>
                            <button className="btn bg-[#FEEB26] rounded mt-5">Shop Now</button>
                        </div>

                    </div>



                </div>
            </div>
        </div>
    );
};

export default BabyBox;