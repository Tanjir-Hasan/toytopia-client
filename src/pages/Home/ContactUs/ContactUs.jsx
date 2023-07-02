import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';

const ContactUs = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="w-11/12 mx-auto my-14">
            <h1 className="lg:text-7xl text-3xl text-[#4a2d4c] font-extrabold text-center mb-16">Contact us</h1>

            <div className='lg:flex flex-row-reverse items-center gap-10'>
                <img src="https://i.ibb.co/71RN0pt/hong-lin-Ze-YQxq-EUn-WQ-unsplash-1.jpg" alt="toys" className='lg:w-1/2 lg:pb-0 pb-3 hover:scale-110 duration-1000' />

                <div className='lg:w-1/2'>

                    <form>
                        {/* name */}
                        <div className="relative mt-6">
                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                            <input
                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                type="text"
                                defaultValue={user?.displayName}
                            />
                        </div>
                        {/* email */}
                        <div className="relative mt-6">
                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
                            <input
                                className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                type="text"
                                defaultValue={user?.email}
                            />
                        </div>
                        {/* description */}
                        <div className="relative mt-6">
                            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Message</label>
                            <textarea
                                className="peer placeholder-transparent h-20 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 pt-2"
                            />
                        </div>

                        <button className="main-btn w-full my-5" type="submit">
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;