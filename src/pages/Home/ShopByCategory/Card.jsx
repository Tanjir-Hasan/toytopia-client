import { Link } from "react-router-dom";

const Card = ({ item }) => {

  const { _id, name, photoUrl, rating, price } = item;

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
      <div className="relative group">
        <img data-aos="flip-up" src={photoUrl} alt="Your Image" className="relative z-10" />
        <div className="absolute bottom-0 right-0 h-full w-full transform translate-x-2 translate-y-2">
          <div className="absolute h-full w-full bg-gray-900 opacity-50"></div>
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2">{price}</p>
        <p className="text-gray-600 mb-4">{rating}</p>
        <button data-aos="zoom-out-down">
          <Link to={`/allToys/${_id}`} className="inline-block bg-[#4a2d4c] hover:bg-[#f2727d] text-white font-semibold py-2 px-16 rounded-full text-base leading-8 tracking-normal">
            View Details
          </Link>
        </button>
      </div>
    </div>

  );
};

export default Card;