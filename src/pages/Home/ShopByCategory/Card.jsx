import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../../provider/AuthProvider";

const Card = ({ item }) => {

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { _id, name, photoUrl, rating, price } = item;

  const handleButtonClick = () => {
    if (!user) {
      toast.error('You have to log in first to view details');
      navigate('/login');
    } 
  };

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
        <button data-aos="zoom-out-down" onClick={handleButtonClick}>
          <Link
            to={`/allToys/${_id}`}
            className="inline-block bg-[#4a2d4c] hover:bg-[#f2727d] text-white font-semibold py-2 px-16 rounded-full text-base leading-8 tracking-normal"
          >
            View Details
          </Link>
        </button>
      </div>
    </div>

  );
};

export default Card;