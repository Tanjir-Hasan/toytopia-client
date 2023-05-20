import useTitle from "../../../hooks/useTitle";
import Banner from "../Banner/Banner";
import Decoration from "../Decoration/Decoration";
import Gallery from "../Gallery/Gallery";
import Partners from "../Partners/Partners";
import ShopByCategory from "../ShopByCategory/ShopByCategory";


const Home = () => {

    useTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Decoration></Decoration>
            <Partners></Partners>
        </div>
    );
};

export default Home;