import React, { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';

const sliderData = [
    {
        url: 'https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        url: 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=821&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        url: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        url: 'https://plus.unsplash.com/premium_photo-1676139860466-8b8f71c0a737?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];

const Carousel = () => {
    const [slide, setSlide] = useState(0);
    const length = sliderData.length;

    const prevSlide = () => {
        setSlide(slide === 0 ? length - 1 : slide - 1);
    };
    
    const nextSlide = () => {
        setSlide(slide === length - 1 ? 0 : slide + 1);
    };
    
    return (
        <div className='max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center'>
            <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-3xl text-[#e8c8ff] cursor-pointer left-8 z-10' />
            <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-3xl text-[#e8c8ff] cursor-pointer right-8 z-10' />
            {sliderData.map((item, index) => (
                <div key={index} className={index === slide ? 'opacity-100' : 'opacity-0'}>
                    {index === slide && <img className='w-full rounded-md' src={item.url} alt="/" />}
                </div>
            ))}
        </div>
    );
};

export default Carousel;
