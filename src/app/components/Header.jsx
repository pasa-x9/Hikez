"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Parallax, Navigation, Autoplay, EffectFade } from 'swiper/modules';

import { IoSearchOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { GrBasket } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiMessenger } from "react-icons/si";
import { CgMenuRight } from "react-icons/cg";

function Header() {
    const [search, setSearch] = useState(false);
    const showSearch = () => {
        setSearch(!search);
    }
    return (
        <>
            <header className='relative'>
                <nav className=' absolute top-0 left-0 z-10 text-white w-full'>
                    <section className='border-b border-white/60'>
                        <div className='flex items-center justify-between w-full p-4'>
                            <div className='md:inline-flex hidden'>
                                <ul className='flex gap-4 text-[15px]'>
                                    <li><a href="tel: + 000 1234 56789">+ 000 1234 56789</a></li>
                                    <li>Catalog</li>
                                    <li>Newsletter</li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                            <div className='md:hidden lg:inline-flex lg:mr-72 mx-auto'>
                                <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#fff',
                                        '--swiper-pagination-color': '#fff',
                                    }}
                                    speed={600}
                                    loop={true}
                                    parallax={true}
                                    navigation={true}
                                    modules={[Parallax, Navigation]}
                                    className="mySwiper w-[300px] text-center text-sm lg:text-base lg:w-[500px] select-none"
                                >
                                    <div
                                        slot="container-start"
                                        className="parallax-bg"
                                        data-swiper-parallax="-23%"
                                    ></div>
                                    <SwiperSlide>
                                        <div>
                                            Buy 1 Get 1 Free on City Tours
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            Free Night With Any Mountain Cabin Booking
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div>
                                            40% Off on Historical Tours
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className='gap-4 md:inline-flex hidden'>
                                <div className='rounded-full w-fit p-2 border border-white/60 hover:bg-yellow-300 hover:text-black'><FaFacebook className='text-lg' /></div>
                                <div className='rounded-full w-fit p-2 border border-white/60 hover:bg-yellow-300 hover:text-black'><FaXTwitter className='text-lg' /></div>
                                <div className='rounded-full w-fit p-2 border border-white/60 hover:bg-yellow-300 hover:text-black'><FaSquareInstagram className='text-lg' /></div>
                                <div className='rounded-full w-fit p-2 border border-white/60 hover:bg-yellow-300 hover:text-black'><SiMessenger className='text-lg' /></div>
                            </div>
                        </div>
                    </section>
                    {/* // */}
                    <div className="flex items-center justify-between px-6 py-4">
                        <div className='w-[120px] md:w-[150px]'><a href='/'><img className='w-full' src="https://wdthikez.wpengine.com/wp-content/themes/hikez/assets/images/light-logo.svg" alt="" /></a></div>
                        <div className='w-fit hidden md:inline-flex uppercase font-semibold text-nowrap flex-nowrap text-sm tracking-[1px]'>
                            <ul className='flex gap-12 opacity-90'>
                                <li className='text-yellow-300'><a href="/">Home</a></li>
                                <li><a href="">Pages</a></li>
                                <li><a href="">Browser Trips</a></li>
                                <li><a href="">Destination</a></li>
                                <li><a href="">Shop</a></li>
                                <li><a href="">Help Center</a></li>
                            </ul>
                        </div>
                        <div className='opacity-80'>
                            <ul className='flex flex-nowrap gap-1 md:gap-4'>
                                <li className='relative'>
                                    <IoSearchOutline className='inline-flex text-3xl' onClick={showSearch} />
                                    {search && (
                                        <form >
                                            <div className="flex absolute top-12 right-0 bg-slate-400/30 backdrop-blur-sm p-8 z-50">
                                                <input type="search" name="" id="" className='focus:outline-none focus:ring-1 focus:ring-[#160647] py-2 px-4 text-sm text-black rounded-l-sm' placeholder='Enter Keyword' />
                                                <button className='bg-[#160647] text-white font-semibold text-sm p-2 rounded-r-sm hover:text-yellow-200'>Search</button>
                                            </div>
                                        </form>
                                    )}
                                </li>
                                <li><HiOutlineUserCircle className='hidden md:inline-flex text-3xl ' /></li>
                                <li><GrBasket className='hidden md:inline-flex text-2xl' /></li>
                                <li><CgMenuRight className='inline-flex text-3xl md:hidden' /></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
