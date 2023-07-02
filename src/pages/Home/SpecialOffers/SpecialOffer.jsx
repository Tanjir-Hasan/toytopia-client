import React, { useState } from 'react';

const SpecialOffer = ({ item }) => {

    const { name, quantity, photoUrl, discounted, price, description } = item;

    const [show, setShow] = useState(false);

    return (
        <div className="mx-auto px-4 py-8 w-2/3">
            <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide" >
                <div className="md:flex-shrink-0">
                    <img src={photoUrl} alt="" className="w-full h-72 rounded-lg rounded-b-none" />
                </div>
                <div className="px-4 py-2 mt-2">
                    <h2 className="font-bold text-xl text-[#4a2d4c] hover:text-[#f2727d] tracking-normal">
                        {name}
                    </h2>
                    <div className="flex justify-between">
                        <p className="font-bold text-rose-600">Discounted Price: $ {discounted}</p>
                        <p className="font-bold text-rose-600 line-through">Regular Price: $
                            <span className=''> {price}</span>
                        </p>
                    </div>
                    <div className="text-sm px-2 mr-1 mt-2 text-justify overflow-hidden object-cover">
                        {
                            show === true ?
                                <>
                                    <p className='text-slate-700'>{description}</p>
                                    <span className='font-normal text-[#f2727d] cursor-pointer' onClick={() => setShow(!show)}>Read less</span>
                                </>
                                :
                                <>
                                    <p className='text-slate-500 font-thin'>{description.substring(0, 50)}.....</p>
                                    <span className='font-semibold text-[#f2727d] cursor-pointer' onClick={() => setShow(!show)}>Read more</span>
                                </>
                        }
                    </div>
                    <p className="font-medium text-green-700">Available Quantity: {quantity}</p>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;