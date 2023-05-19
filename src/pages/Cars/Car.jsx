import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';

const Car = () => {

    const [show, setShow] = useState(false);

    const details = useLoaderData();

    const { name, sellerName, email, price, photoUrl, rating, description, quantity } = details;

    return (
        <div
            style={{ backgroundImage: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,246,236,1) 39.5%, rgba(100,46,122,0.23) 100.2% )" }}
        >
            <div className="mx-auto px-4 py-8 max-w-xl">
                <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide" >
                    <div className="md:flex-shrink-0">
                        <img src={photoUrl} alt="" className="w-full h-64 rounded-lg rounded-b-none" />
                    </div>
                    <div className="px-4 py-2 mt-2">
                        <h2 className="font-bold text-2xl text-[#4a2d4c] hover:text-[#f2727d] tracking-normal">{name}</h2>
                        <div className="text-sm px-2 mr-1 mt-2">
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
                        <div className="flex items-center justify-end gap-1 mt-2">
                            <AiFillStar className="text-rose-600" />
                            {rating}
                        </div>
                        <div className="flex justify-between">
                            <p className="font-bold text-rose-600">$ {price}</p>
                            <p className="font-medium text-green-700">Available Quantity: {quantity}</p>
                        </div>
                        <div className="flex items-center justify-between my-3">
                            <h3 className="text-[#4a2d4c] font-thin hover:text-[#f2727d] hover:font-normal">{sellerName}</h3>
                            <p className="text-[#4a2d4c] font-thin hover:text-[#f2727d] hover:font-normal">{email}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;