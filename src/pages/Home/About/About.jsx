import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="w-11/12 mx-auto my-14">
            <h1 className="lg:text-7xl text-3xl text-[#4a2d4c] font-extrabold text-center mb-16">About us</h1>

            <div className='lg:flex items-center gap-10'>
                <img src="https://i.ibb.co/QJN9bpt/photo-1515281239448-2abe329fe5e5.jpg" alt="toys" className='lg:w-1/2 lg:pb-0 pb-3 hover:scale-110 duration-1000' />

                <p className='font-light'>
                    <span className='text-2xl text-[#4a2d4c] font-bold'>Welcome to Toytopia!</span>
                    <br /> <br />
                    At Toytopia, we have a deep love for toy cars and a passion for providing enthusiasts and collectors with an exceptional shopping experience. As a leading online destination for toy car enthusiasts, we take pride in offering a wide selection of high-quality toy cars that cater to both kids and adults alike.
                    <br />
                    With years of experience in the toy industry, we understand the joy and excitement that comes with owning and collecting toy cars. Our mission is to bring that joy to every customer who visits our website. Whether you're a seasoned collector or a parent looking for the perfect toy car for your child, we've got you covered.
                    <br /> 
                    <br /> 
                    <span className='text-2xl text-[#4a2d4c] font-bold'>Why Choose Toytopia?</span>
                    <br /> <br />
                    Extensive Selection: We carefully curate our collection to offer an extensive range of toy cars, including classic models, modern supercars, vintage collectibles, and limited editions. From die-cast cars to remote-controlled vehicles, we have something to cater to every taste and preference.
                    <br />
                    Quality and Authenticity: We value the satisfaction of our customers, which is why we source our toy cars from reputable manufacturers and trusted brands. Every product in our inventory is guaranteed...... <Link to="/about" className='text-[#4a2d4c] font-bold hover:text-[#f2727d]'>Details</Link>
                </p>
            </div>
        </div>
    );
};

export default About;