import Marquee from "react-fast-marquee";
import Lottie from "lottie-react";
import car1 from "../../../assets/animations/141346-cars.json";
import car2 from "../../../assets/animations/14716-coupe-car-loop.json";
import car3 from "../../../assets/animations/14717-sedan-car-animation.json";
import car4 from "../../../assets/animations/17413-relax-and-chill.json";
import car5 from "../../../assets/animations/27631-blue-car.json";

const Gallery = () => {
    return (
        <div className="w-11/12 mx-auto my-14">
            <h1  className="lg:text-7xl text-3xl text-[#4a2d4c] font-extrabold text-center mb-16">Toytopia Playland</h1>
            <Marquee speed={100} pauseOnHover>
                <Lottie animationData={car1} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car2} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car3} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car4} className="h-64 ml-4" loop={true} />
                <Lottie animationData={car5} className="h-64 ml-4" loop={true} />
            </Marquee>
        </div>
    );
};

export default Gallery;