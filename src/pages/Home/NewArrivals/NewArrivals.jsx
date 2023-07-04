import React from 'react';
import Marquee from 'react-fast-marquee';

const NewArrivals = () => {
    return (
        <div className="w-11/12 mx-auto my-14">
            <h1 className="lg:text-7xl text-3xl text-[#4a2d4c] font-extrabold text-center -rotate-6">Upcoming Products</h1>
            <p className="lg:text-3xl text-xl text-[#4a2d4c] font-serif font-thin text-center my-8 rotate-3">- Soon to be displayed -</p>

            <Marquee speed={125} pauseOnHover>
                <img src="https://i.ibb.co/zfwMJNV/eric-nopanen-Euf-Bd-G-ZQMs-unsplash-1.jpg" alt="" className='w-72 p-2 -rotate-3' />
                <img src="https://i.ibb.co/x3ncSBh/mink-mingle-Riz1q-Apl-MQk-unsplash.jpg" alt="" className='w-72 p-2 rotate-3' />
                <img src="https://i.ibb.co/pxWPrvV/sven-brandsma-Rlj-CS6-Vk-Tvc-unsplash.jpg" alt="" className='w-72 p-2 -rotate-3' />
                <img src="https://i.ibb.co/LhMcqLB/isaac-martin-C09-NUA6a-M2o-unsplash.jpg" alt="" className='w-72 p-2 rotate-3' />
                <img src="https://i.ibb.co/QpDK8jy/gimmel-magaway-4-E0u7-Vsf-Gms-unsplash.jpg" alt="" className='w-72 p-2 -rotate-3' />
            </Marquee>
        </div>
    );
};

export default NewArrivals;