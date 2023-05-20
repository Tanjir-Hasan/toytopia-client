import { BsFillTelephoneFill, BsInstagram, BsFacebook } from 'react-icons/bs';
import { FaMapMarker } from 'react-icons/fa';
import { AiFillMail } from 'react-icons/ai';
import { FiYoutube, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="text-[#4a2d4c] bg-[#fef0e7] lg:px-32 px-16 py-16">
            <div className='lg:flex justify-between'>
                <div className='space-y-3'>
                    <div className="inline-flex items-center">
                        <img src="https://i.ibb.co/tLBkYvM/tkthao219-bubududu.gif" className="h-8" alt="" />
                        <h3 className='text-4xl font-extrabold mt-4 '>TOYTOPIA</h3>
                    </div>
                    <p className='font-medium font-mono'>Toytopia is a destination <br /> toy shop with an extensive <br /> collection of toys and games <br /> for kids of all ages.</p>
                </div>
                <div className='space-y-3'>
                    <h3 className='text-2xl font-bold mt-4'>We are here</h3>
                    <p className='font-medium font-mono'>3219 Cedar Street
                        <br /> Cedar Rapids, IA 52402
                        <br /> United States
                    </p>
                    <button className='btn-footer'>
                        <FaMapMarker />
                        <span>View us on map</span>
                    </button>
                </div>
                <div className="flex flex-col space-y-3">
                    <h3 className='text-2xl font-bold mt-4'>Contact Us</h3>
                    <button className='btn-footer'>
                        <BsFillTelephoneFill />
                        <span>0000 - 123 - 456789</span>
                    </button>
                    <button className='btn-footer'>
                        <AiFillMail />
                        <span>info@toytopia.com</span>
                    </button>
                </div>
                <div className='space-y-3'>
                    <h3 className='text-2xl font-bold mt-4'>Get us on social</h3>
                    <div className='inline-flex gap-3'>

                        <Link to="https://www.facebook.com/" target={'_blank'}>
                            <BsFacebook className='text-blue-500 cursor-pointer hover:animate-pulse hover:text-blue-600' size={"2rem"} />
                        </Link>

                        <Link to="https://www.instagram.com/" target={'_blank'}>
                            <BsInstagram className='text-rose-500 cursor-pointer hover:animate-pulse hover:text-rose-600' size={"2rem"} />
                        </Link>

                        <Link to="https://www.youtube.com/" target={'_blank'}>
                            <FiYoutube className='text-red-500 cursor-pointer hover:animate-pulse hover:text-red-600' size={"2rem"} />
                        </Link>

                        <Link to="https://twitter.com/" target={'_blank'}>
                            <FiTwitter className='text-blue-700 cursor-pointer hover:animate-pulse hover:text-blue-600' size={"2rem"} />
                        </Link>
                    </div>
                </div>
            </div>
            <hr className='border border-solid border-[#4a2d4c] border-1 my-10' />
            <p className='text-center'>© 2023 Toytopia. All rights reserved.</p>
        </div>
    );
};

export default Footer;