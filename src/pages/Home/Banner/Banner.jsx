import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-11/12 mx-auto my-8">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/MRGLjH7/Picsart-23-05-21-18-49-59-859.jpg" className="w-full rounded-2xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/jJWvMdB/Picsart-23-05-21-18-50-37-932.jpg" className="w-full rounded-2xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/ZLmTYpy/Picsart-23-05-21-18-47-43-941.jpg" className="w-full rounded-2xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://i.ibb.co/wpX3q3q/Picsart-23-05-21-18-50-22-149.jpg" className="w-full rounded-2xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;