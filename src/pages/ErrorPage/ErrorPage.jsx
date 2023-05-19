import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <div className='flex flex-col align-middle h-screen justify-center items-center my-auto'>
            <img src="https://i.ibb.co/rFjN4xp/facebook-emoji.gif" alt="" className='h-64' />
            <p className='text-xl mb-4 text-center'>{error.message}</p>
            <h3 className='text-5xl font-extrabold text-[#f2727d] my-4'>Error: {status}</h3>
            <Link to='/'>
                <button className='flex items-center text-2xl hover:text-[#f2727d] text-[#4a2d4c] font-semibold py-2 px-16 rounded leading-8 tracking-normal gap-3 border-2 border-[#4a2d4c]'>
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;