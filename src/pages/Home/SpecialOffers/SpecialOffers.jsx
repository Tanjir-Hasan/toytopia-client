import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

const SpecialOffers = () => {

    const [show, setShow] = useState(false);

    return (
        <div className="w-11/12 mx-auto my-14">
            <h1 className="lg:text-7xl text-3xl text-[#4a2d4c] font-extrabold text-center">Hurry up!</h1>
            <p className="lg:text-3xl text-xl text-[#4a2d4c] font-serif font-thin text-center my-8">- Limited time offers! -</p>

            <div className="mx-auto px-4 py-8 max-w-xl">
                <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide" >
                    <div className="md:flex-shrink-0">
                        <img src="https://i.ibb.co/85bcFxY/Picsart-23-05-21-18-53-18-563.jpg" alt="" className="w-full h-72 rounded-lg rounded-b-none" />
                    </div>
                    <div className="px-4 py-2 mt-2">
                        <h2 className="font-bold text-xl text-[#4a2d4c] hover:text-[#f2727d] tracking-normal">
                            Joyride Jumper
                        </h2>
                        <div className="flex justify-between">
                            <p className="font-bold text-rose-600">Discounted Price: $ 45</p>
                            <p className="font-bold text-rose-600">Regular Price: $
                                <span className='line-through'> 65</span>
                            </p>
                        </div>
                        <p className="font-medium text-green-700">Available Quantity: 4</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;