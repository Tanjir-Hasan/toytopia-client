import Banner from "../Banner/Banner";
import Decoration from "../Decoration/Decoration";
import Gallery from "../Gallery/Gallery";
import Partners from "../Partners/Partners";
import ShopByCategory from "../ShopByCategory/ShopByCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <Gallery></Gallery> */}
            <ShopByCategory></ShopByCategory>
            <Decoration></Decoration>
            <Partners></Partners>
        </div>
    );
};

export default Home;