import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaMapMarker } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className="text-[#4a2d4c] bg-[#fef0e7] lg:flex justify-between px-32">
            <h3 className='text-4xl font-extrabold'>TOYTOPIA</h3>
            <div>
                <h3>We are here</h3>
                <p>3219 Cedar Street
                    <br /> Cedar Rapids, IA 52402
                    <br /> United States
                </p>
                <button className='btn-footer'>
                    <FaMapMarker />
                    <span>View us on map</span>
                </button>
            </div>
            <div className="flex flex-col space-y-3">
                <h3>Contact Us</h3>
                <button className='btn-footer'>
                    <BsFillTelephoneFill />
                    <span>0000-123-456789</span>
                </button>
                <button className='btn-footer'>
                    <AiFillMail />
                    <span> support@toytopia.com</span>
                </button>
            </div>
            <div>
                <h3>Get us on social</h3>
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;