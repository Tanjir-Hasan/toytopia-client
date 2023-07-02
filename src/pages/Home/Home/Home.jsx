import useTitle from "../../../hooks/useTitle";
import About from "../About/About";
import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import Decoration from "../Decoration/Decoration";
import Gallery from "../Gallery/Gallery";
import NewArrivals from "../NewArrivals/NewArrivals";
import Partners from "../Partners/Partners";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import SpecialOffers from "../SpecialOffers/SpecialOffers";
import TopSells from "../TopSells/TopSells";


const Home = () => {

    useTitle('Home');

    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <TopSells></TopSells>
            <SpecialOffers></SpecialOffers>
            <NewArrivals></NewArrivals>
            <Decoration></Decoration>
            <Partners></Partners>
            <About></About>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;