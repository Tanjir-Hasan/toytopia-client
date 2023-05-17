import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Partners from "../Partners/Partners";
import ShopByCategory from "../ShopByCategory/ShopByCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Partners></Partners>
        </div>
    );
};

export default Home;