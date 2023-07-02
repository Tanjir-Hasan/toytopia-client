import React from 'react';

const TopSell = ({ item }) => {

    const { name, quantity, photoUrl } = item;

    return (
        <div className="mx-auto px-4 py-8 max-w-xl">
            <div className="shadow-2xl rounded-lg mb-6 tracking-wide" >
                <div className="md:flex-shrink-0">
                    <img src={photoUrl} alt="" className="w-full h-72 rounded-lg rounded-b-none hover:scale-75 duration-1000" />
                </div>
                <div className="flex justify-between px-4 py-2 mt-2">
                    <h2 className="font-bold text-xl text-[#4a2d4c] hover:text-[#f2727d] tracking-normal">
                        {name}
                    </h2>
                    <p className="font-bold text-green-700">Available: {quantity}</p>
                </div>
            </div>
        </div>
    );
};

export default TopSell;