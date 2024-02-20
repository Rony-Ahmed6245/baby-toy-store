

import BabyBox from '../Components/BabyBox';
import Blog from '../Components/Blog';
import Carusel from '../Components/Carusel';
import FeatureProducts from '../Components/FeatureProducts';
import Service from '../Components/Service';




const Home = () => {
    return (
        <div>
            {/* banner carusel section */}
            <Carusel></Carusel>
            {/* babybox section  */}
            <BabyBox></BabyBox>

            {/* feature products  */}
            <FeatureProducts></FeatureProducts>
            {/* blog  */}
            <Blog></Blog>
            <Service></Service>

        </div>
    );
};

export default Home;