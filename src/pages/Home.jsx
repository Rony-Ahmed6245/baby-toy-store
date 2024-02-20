

import BabyBox from '../Components/BabyBox';
import Carusel from '../Components/Carusel';
import FeatureProducts from '../Components/FeatureProducts';



const Home = () => {
    return (
        <div>
            {/* banner carusel section */}
            <Carusel></Carusel>
            {/* babybox section  */}
            <BabyBox></BabyBox>

            {/* feature products  */}
            <FeatureProducts></FeatureProducts>


        </div>
    );
};

export default Home;