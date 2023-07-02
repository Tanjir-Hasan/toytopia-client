import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import SpecialOffer from './SpecialOffer';

const SpecialOffers = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/discounted')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className="w-11/12 mx-auto my-14">
            <h1 className="lg:text-7xl text-3xl text-[#4a2d4c] font-extrabold text-center">Hurry up!</h1>
            <p className="lg:text-3xl text-xl text-[#4a2d4c] font-serif font-thin text-center my-8">- Limited time offers! -</p>

            <div data-aos="fade-down"
                data-aos-duration="3000" className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                {
                    items.map(item => <SpecialOffer key={item._id} item={item}></SpecialOffer>)
                }
            </div>
        </div>
    );
};

export default SpecialOffers;