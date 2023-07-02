import React, { useEffect, useState } from 'react';
import TopSell from './TopSell';

const TopSells = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/topSell')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div className="w-11/12 mx-auto my-14">
            <h1 className="lg:text-7xl text-3xl text-[#4a2d4c] font-extrabold text-center">Best Toys</h1>
            <p className="text-xl lg:text-3xl text-[#4a2d4c] font-serif font-thin text-center my-8">- Our top sell toys -</p>
            <div data-aos="fade-up"
                data-aos-duration="3000" className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    items.map(item => <TopSell key={item._id} item={item}></TopSell>)
                }
            </div>
        </div>
    );
};

export default TopSells;