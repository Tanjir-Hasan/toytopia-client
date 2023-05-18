import Marquee from "react-fast-marquee";
import Lottie from "lottie-react";
import car1 from "../../../../public/animations/141346-cars.json";
import car2 from "../../../../public/animations/14716-coupe-car-loop.json";
import car3 from "../../../../public/animations/14717-sedan-car-animation.json";
import car4 from "../../../../public/animations/17413-relax-and-chill.json";
import car5 from "../../../../public/animations/27631-blue-car.json";
import car7 from "../../../../public/animations/4526-load.json";
import car8 from "../../../../public/animations/68832-shop-car.json";
import car9 from "../../../../public/animations/71204-cars.json";
import car10 from "../../../../public/animations/72049-red-car.json";
import car11 from "../../../../public/animations/76051-red-car.json";
import car12 from "../../../../public/animations/82822-a-car.json";
import car13 from "../../../../public/animations/83673-vehicles.json";
import car14 from "../../../../public/animations/92257-car-on-a-road.json";
import car15 from "../../../../public/animations/93387-car-insurance-offers-loading-page.json";
import car16 from "../../../../public/animations/99207-moving-car.json";
import car17 from "../../../../public/animations/85846-carr.json";

const Gallery = () => {
    return (
        <div className="lg:w-11/12 mx-auto my-14">
            <h1  className="text-7xl text-[#4a2d4c] font-extrabold text-center mb-16">Toytopia Playland</h1>
            <Marquee speed={100} pauseOnHover>
                <Lottie animationData={car1} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car2} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car3} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car4} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car5} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car7} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car8} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car9} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car10} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car11} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car12} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car13} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car14} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car15} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car16} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car17} className="h-64 ml-4" loop={true} />
            </Marquee>
        </div>
    );
};

export default Gallery;