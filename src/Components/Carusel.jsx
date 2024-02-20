import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bg1 from '../assets/slider_2000x.webp'
import bg2 from '../assets/slider2_3bf1f078-ffd4-4661-8270-723270579c93_2000x.webp'
import bg3 from '../assets/slider4_2000x.webp'


const Carusel = () => {
    return (
        <div>
            <Carousel
                autoPlay
                interval
                className="text-center"
            >
                <div className="relative">
                    <img src={bg1} />
                    <div className="absolute top-1/3 right-0 transform translate-y-(-1/2)">
                        <h1 className="md:text-6xl lg:text-8xl text-3xl text-[#FC82BD] font-thin pr-20">Your child is in <br /> <span className="text-[#69BFF1]">Caring Hands</span></h1>
                    </div>
                </div>
                <div className="relative">
                    <img src={bg2} />
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 pl-20">
                        <h1 className="md:text-6xl lg:text-8xl text-3xl text-[#FC82BD] font-thin">Your Baby deserved<br /> <span className="text-[#69BFF1]">The best care</span></h1>
                    </div>
                </div>
                <div className="relative">
                    <img src={bg3} />
                    <div className="absolute top-1/3 right-0 transform translate-y-(-1/2)">
                        <h1 className="md:text-6xl lg:text-8xl text-3xl text-[#FC82BD] font-thin pr-20">Keep a baby<br /> <span className="text-[#69BFF1]">soft skin safe</span></h1>
                    </div>
                </div>

            </Carousel>
        </div>
    );
};

export default Carusel;