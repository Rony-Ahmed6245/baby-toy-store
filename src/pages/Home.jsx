

import BabyBox from '../Components/BabyBox';
import Blog from '../Components/Blog';
import Carusel from '../Components/Carusel';
import FeatureProducts from '../Components/FeatureProducts';
import Footer from '../Components/Footer';
import Service from '../Components/Service';




const Home = () => {
    return (
        <div>
            <Carusel></Carusel>
            <BabyBox></BabyBox>
            <FeatureProducts></FeatureProducts>
            <Blog></Blog>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;