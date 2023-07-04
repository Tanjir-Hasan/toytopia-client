import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../../provider/AuthProvider";
import { AiFillStar } from 'react-icons/ai';

const Card = ({ item }) => {

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { _id, name, photoUrl, rating, price } = item;

  const handleButtonClick = () => {
    if (!user) {
      toast.error('You have to log in first to view details');
      navigate('/login') || navigate(`/allToys/${_id}`);
    }
  };

  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="w-full mx-auto bg-white rounded-lg overflow-hidden shadow-lg scale-90 hover:scale-100 duration-700">

      <div className="relative group">
        <img src={photoUrl} alt="Your Image" className="relative z-10 w-11/12 h-56 mx-auto rounded-md -rotate-2" />
        <div className="absolute -bottom-1 left-5 h-full w-full transform translate-x-2 translate-y-1 -rotate-2">
          <div className="absolute h-full w-11/12 bg-[#f2727d]  rounded-md"></div>
        </div>
      </div>

      <div className="p-4 space-y-4 mt-4">
        <h2 className="font-bold text-3xl text-center text-[#4a2d4c] tracking-normal">{name}</h2>
        <div className="flex justify-between items-center">
          <p className="font-bold text-rose-600">Price: $ {price}</p>
          <div className="flex items-center justify-end gap-1 mt-2">
            <span>Rating: </span>
            {rating}
            <AiFillStar className="text-rose-600" />
          </div>
        </div>
        <button className="w-full" onClick={handleButtonClick}>
          <Link
            to={`/allToys/${_id}`}
            className="inline-block bg-[#4a2d4c] hover:bg-[#f2727d] text-white font-semibold py-2 px-16 rounded-md text-base leading-8 tracking-normal"
          >
            View Details
          </Link>
        </button>
      </div>
    </div>

  );
};

export default Card;