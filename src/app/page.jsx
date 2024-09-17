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
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { FaArrowDownLong } from "react-icons/fa6";
import { IoIosAirplane } from "react-icons/io";
import { GiCampfire } from "react-icons/gi";4
import { PiPersonSimpleHike } from "react-icons/pi";
import { MdTravelExplore } from "react-icons/md";
import { GiSurferVan } from "react-icons/gi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { LuClock } from "react-icons/lu";
import { IoCalendarOutline } from "react-icons/io5";

export default function Home() {
  return (
    <>
    <section className='relative'>
    <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper w-full h-[110vh] text-white"
      >
        <SwiperSlide className='swipe1'>
            <div className="swiper-content text-center grid gap-8">
              <h1>Adventure Awaits---<IoIosAirplane className='plane' /></h1>
              <h2 className='md:text-6xl text-4xl font-bold'>Drive Into Excitement</h2>
              <p className='text-sm md:text-base'>Eros in cursus turpis massa tincidunt. Tempus egestas sed sed risus pretium. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut.</p>
              <div className='bg-[#160647] py-3 px-6 md:px-10 hover:bg-yellow-300 hover:text-black transition duration-700 font-semibold uppercase mx-auto w-fit'>Travel More</div>
              <FaArrowDownLong className='arrow' />
            </div>
        </SwiperSlide>
        <SwiperSlide className='swipe2'>
        <div className="swiper-content text-center grid gap-6">
              <h1>Embrace The Journey---<IoIosAirplane className='plane' /></h1>
              <h2 className='md:text-6xl text-4xl font-bold'>Luxury Hikings</h2>
              <p className='text-sm md:text-base'>Odio pellentesque diam volutpat commodo sed. Semper feugiat nibh sed pulvinar proin. Libero nunc consequat interdum varius sit amet mattis.Ipsum consequat nisl vel pretium lectus.</p>
              <div className='bg-[#160647] py-3 px-6 md:px-10 hover:bg-yellow-300 hover:text-black transition duration-700 font-semibold uppercase mx-auto w-fit'>Travel More</div>
              <FaArrowDownLong className='arrow' />
            </div>
        </SwiperSlide>
        <SwiperSlide className='swipe3'>
        <div className="swiper-content text-center grid gap-6">
              <h1>Find Your path---<IoIosAirplane className='plane' /></h1>
              <h2 className='md:text-6xl text-4xl font-bold'>Explore Mountains</h2>
              <p className='text-sm md:text-base'>Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Ipsum dolor sit amet consectetur adipiscing elit. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Massa tempor nec feugiat nisl pretium.</p>
              <div className='bg-[#160647] py-3 px-6 md:px-10 hover:bg-yellow-300 hover:text-black transition duration-700 font-semibold uppercase mx-auto w-fit'>Travel More</div>
              <FaArrowDownLong className='arrow' />
            </div>
        </SwiperSlide>
        <SwiperSlide className='swipe4'>
        <div className="swiper-content text-center grid gap-6">
              <h1>Explore Island Resorts---<IoIosAirplane className='plane' /></h1>
              <h2 className='md:text-6xl text-4xl font-bold'>Discover Islands</h2>
              <p className='text-sm md:text-base'>Vunc eu hendrerit turpis In pellentesque nunc non Donec pretium gravida neque et placerat. Consectetur a erat nam at. Facilisis magna etiam tempor orci. Sem et tortor consequat id. Fermentum egestas tellus. </p>
              <div className='bg-[#160647] py-3 px-6 md:px-10 hover:bg-yellow-300 hover:text-black transition duration-700 font-semibold uppercase mx-auto w-fit'>Travel More</div>
              <FaArrowDownLong className='arrow' />
            </div>
        </SwiperSlide>
      </Swiper>
      <div className='flex gap-6 text-white w-fit p-2 -rotate-90 z-50 absolute top-[60vh] -left-52 md:-left-44'>
        <div className='text-sm md:text-base'>Destination:</div>
        <div className='border border-white rounded-md px-3 py-1 text-xs md:text-sm font-semibold w-fit'>#India</div>
        <div className='border border-white rounded-md px-3 py-1 text-xs md:text-sm font-semibold w-fit'>#Australia</div>
        <div className='border border-white rounded-md px-3 py-1 text-xs md:text-sm font-semibold w-fit'>#France</div>
        <div className='border border-white rounded-md px-3 py-1 text-xs md:text-sm font-semibold w-fit'>#Dubai</div>
      </div>
      <div className="container flex flex-wrap w-[80%] md:w-full gap-6 md:gap-20 items-center px-4 py-12 justify-around bg-white rounded-md z-50 relative -translate-y-6 shadow-xl">
        <h3 className="text-3xl font-bold text-[#160647]">Find your Trip</h3>
    <div className='flex flex-wrap gap-12'>
      <select name="destination" id="destination-select" className='border border-[#160647] py-4 px-8 w-full md:w-auto'>
        <option value="" disabled selected>Destinations</option>
        <option value="1">India</option>
        <option value="2">Australia</option>
        <option value="3">France</option>
        <option value="4">Maldives</option>
        <option value="5">Dubai</option>
        <option value="6">New York</option>
        <option value="7">Switzerland</option>
      </select>
      <input type="date" name="" id="" placeholder='Date & Time' className='w-full md:w-auto placeholder:text-[#160647] border border-[#160647] py-4 px-8' />
      <select name="destination" id="destination-select" className='w-full  md:w-auto border border-[#160647] py-4 px-8'>
        <option value="" disabled selected>Activity</option>
        <option value="1">Adventure Sports</option>
        <option value="2">Cultural Workshops</option>
        <option value="3">Bungee Jumping</option>
        <option value="4">Mountain Biking</option>
        <option value="5">Boat Tour</option>
        <option value="6">Walking Tour</option>
        <option value="7">Diving</option>
      </select>
      <button className='bg-[#160647] w-full md:w-auto py-4 px-8 text-white hover:bg-yellow-400 font-semibold transition-all duration-700 hover:text-[#160647]'>Check Availability</button>
    </div>
      </div>
    </section>
    <section className='sec2'>
      <div className="container py-40 px-8">
        <div className="grid md:grid-cols-2 gap-4 text-[#160647] font-bold capitalize">
          <div></div>
          <div className='grid gap-4'>
            <h3>Travel With Our Professionals---<IoIosAirplane className='plane' /></h3>
            <h2 className='text-3xl lg:text-5xl'>Create unforgettable memories with your love</h2>
            <p className='text-sm font-medium'>Pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Interdum varius sit amet mattis. Posuere morbi leo urna molestie at sagittis elementum eu facilisis. Sit amet dictum sit amet justo donec enim proin sagittis nisl rhoncus diam vulputate.</p>
            <div className='grid grid-cols-2 text-xs md:text-base'>
              <div><GiCampfire className='inline-flex text-7xl p-4' />Fire Camp</div>
              <div><PiPersonSimpleHike className='inline-flex text-7xl p-4' />Trained Guides</div>
              <div><MdTravelExplore className='inline-flex text-7xl p-4' />Travel Information</div>
              <div><GiSurferVan className='inline-flex text-7xl p-4' />Pickup And Drop</div>
              <button className='text-sm uppercase font-semibold bg-[#160647] px-12 py-4 text-white w-fit ml-4 mt-8 text-nowrap hover:bg-yellow-400 hover:text-[#160647] transition duration-700'>More About Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='sec3 py-16'>
        <div className="grid md:grid-cols-2 text-[#160647] py-12 px-12">
        <div>
        <h3 className='py-4'>Discover All Famous Places---<IoIosAirplane className='plane' /></h3>
        <h2 className='text-3xl lg:text-5xl font-bold'>Explore Destinations</h2>
        </div>
        <div className='py-10'>
          <p>Quis viverra nibh cras pulvinar. Scelerisque in dictum non consectetur a erat nam at. Tincidunt augue interdum velit euismod in pellentesque. Molestie nunc non blandit massa enim.</p>
          <div className='border-b md:text-base text-sm w-fit mt-4 border-[#160647] uppercase font-semibold hover:text-[#D6B588] hover:border-[#D6B588] transition duration-700 origin-top-left'><a href="">Browse all Adventure Trips</a></div>
        </div>
      </div>
      <div className='px-4'>
      <Swiper
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='pops w-full sm:w-[260px] relative overflow-hidden'>
            <img className='w-full rounded-lg' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/destination-image-09.jpg" alt="" />
            <div className='pops-inner w-full'>
              <div className='px-4'>
                <h3 className='hover:text-yellow-200'>France</h3>
                <div>
                  <p className='text-sm py-2'>Price Starts ($125 - $255)</p>
                  <button className='text-sm uppercase font-semibold w-fit px-6 py-3 text-nowrap bg-yellow-400 hover:bg-[#D6B485] text-[#160647] transition duration-700'>Browser Tips</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='pops w-full sm:w-[260px] relative overflow-hidden'>
            <img className='w-full rounded-lg' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/destination-image-03.jpg" alt="" />
            <div className='pops-inner w-full'>
              <div className='px-4'>
                <h3 className='hover:text-yellow-200'>Turkey</h3>
                <div>
                  <p className='text-sm py-2'>Price Starts ($125 - $255)</p>
                  <button className='text-sm uppercase font-semibold w-fit px-6 py-3 text-nowrap bg-yellow-400 hover:bg-[#D6B485] text-[#160647] transition duration-700'>Browser Tips</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='pops w-full sm:w-[260px] relative overflow-hidden'>
            <img className='w-full rounded-lg' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/destination-image-04.jpg" alt="" />
            <div className='pops-inner w-full'>
              <div className='px-4'>
                <h3 className='hover:text-yellow-200'>Australia</h3>
                <div>
                  <p className='text-sm py-2'>Price Starts ($125 - $255)</p>
                  <button className='text-sm uppercase font-semibold w-fit px-6 py-3 text-nowrap bg-yellow-400 hover:bg-[#D6B485] text-[#160647] transition duration-700'>Browser Tips</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='pops w-full sm:w-[260px] relative overflow-hidden'>
            <img className='w-full rounded-lg' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/destination-image-05.jpg" alt="" />
            <div className='pops-inner w-full'>
              <div className='px-4'>
                <h3 className='hover:text-yellow-200'>Switzerland</h3>
                <div>
                  <p className='text-sm py-2'>Price Starts ($125 - $255)</p>
                  <button className='text-sm uppercase font-semibold w-fit px-6 py-3 text-nowrap bg-yellow-400 hover:bg-[#D6B485] text-[#160647] transition duration-700'>Browser Tips</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='pops w-full sm:w-[260px] relative overflow-hidden'>
            <img className='w-full rounded-lg' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/Destination-Jaban.jpg" alt="" />
            <div className='pops-inner w-full'>
              <div className='px-4'>
                <h3 className='hover:text-yellow-200'>Japan</h3>
                <div>
                  <p className='text-sm py-2'>Price Starts ($125 - $255)</p>
                  <button className='text-sm uppercase font-semibold w-fit px-6 py-3 text-nowrap bg-yellow-400 hover:bg-[#D6B485] text-[#160647] transition duration-700'>Browser Tips</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='pops w-full sm:w-[260px] relative overflow-hidden'>
            <img className='w-full rounded-lg' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/destination-image-08.jpg" alt="" />
            <div className='pops-inner w-full'>
              <div className='px-4'>
                <h3 className='hover:text-yellow-200'>Italy</h3>
                <div>
                  <p className='text-sm py-2'>Price Starts ($125 - $255)</p>
                  <button className='text-sm uppercase font-semibold w-fit px-6 py-3 text-nowrap bg-yellow-400 hover:bg-[#D6B485] text-[#160647] transition duration-700'>Browser Tips</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='pops w-full sm:w-[260px] relative overflow-hidden'>
            <img className='w-full rounded-lg' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/destination-image-02.jpg" alt="" />
            <div className='pops-inner w-full'>
              <div className='px-4'>
                <h3 className='hover:text-yellow-200'>India</h3>
                <div>
                  <p className='text-sm py-2'>Price Starts ($125 - $255)</p>
                  <button className='text-sm uppercase font-semibold w-fit px-6 py-3 text-nowrap bg-yellow-400 hover:bg-[#D6B485] text-[#160647] transition duration-700'>Browser Tips</button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    </section>
    <section className='sec4 py-2 px-4 md:px-8 bg-[#160647]'>
      <div className='text-white mx-auto py-8 text-center w-fit select-none'>
      <h3 className='py-4'>Enjoy With Safety Experience---<IoIosAirplane className='plane' /></h3>
      <h4 className='text-3xl md:text-5xl'>Explore Our Popular Trending Destinations Package</h4>
      </div>
      <div className='md:flex flex-wrap py-12'>
        <div className='md:w-[30%] h-[65vh] sm:h-[88vh] w-full px-8 md:px-0'>
          <img className='w-full h-full rounded-lg' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/egypt-img.jpg" alt="" />
        </div>
        <div className='w-full md:w-[70%] py-4'>
        <div className='grid grid-cols-2 gap-8 px-8 py-4 border-b border-white/60'>
        <div>
          <h4 className='text-yellow-300 my-4 text-3xl'>Egypt</h4>
          <p className='text-white'>Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Netus et malesuada fames ac turpi.</p>
        </div>
        <div>
          <div className='bg-transparent border border-white text-yellow-300 hover:bg-yellow-300 hover:text-[#160647] hover:border-yellow-300 transition duration-500 uppercase py-2 text-center my-5'>50+ Package Available</div>
          <button className='bg-[#D6B485] uppercase w-fit px-8 py-2 text-[#160647] hover:bg-yellow-300 transition duration-700'>Book Now</button>
        </div>
        </div>
        <div className='grid grid-cols-2 gap-8 px-8 py-4 border-b border-white/60'>
        <div>
          <h4 className='text-yellow-300 my-4 text-3xl'>France</h4>
          <p className='text-white'>Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Netus et malesuada fames ac turpi.</p>
        </div>
        <div>
          <div className='bg-transparent border border-white text-yellow-300 hover:bg-yellow-300 hover:text-[#160647] hover:border-yellow-300 transition duration-500 uppercase py-2 text-center my-5'>50+ Package Available</div>
          <button className='bg-[#D6B485] uppercase w-fit px-8 py-2 text-[#160647] hover:bg-yellow-300 transition duration-700'>Book Now</button>
        </div>
        </div>
        <div className='grid grid-cols-2 gap-8 px-8 py-4 border-b border-white/60'>
        <div>
          <h4 className='text-yellow-300 my-4 text-3xl'>Switzerland</h4>
          <p className='text-white'>Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Netus et malesuada fames ac turpi.</p>
        </div>
        <div>
          <div className='bg-transparent border border-white text-yellow-300 hover:bg-yellow-300 hover:text-[#160647] hover:border-yellow-300 transition duration-500 uppercase py-2 text-center my-5'>50+ Package Available</div>
          <button className='bg-[#D6B485] uppercase w-fit px-8 py-2 text-[#160647] hover:bg-yellow-300 transition duration-700'>Book Now</button>
        </div>
        </div>
        <div className='grid grid-cols-2 gap-8 px-8 py-4 border-b border-white/60'>
        <div>
          <h4 className='text-yellow-300 my-4 text-3xl'>Peru</h4>
          <p className='text-white'>Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Netus et malesuada fames ac turpi.</p>
        </div>
        <div>
          <div className='bg-transparent border border-white text-yellow-300 hover:bg-yellow-300 hover:text-[#160647] hover:border-yellow-300 transition duration-500 uppercase py-2 text-center my-5'>50+ Package Available</div>
          <button className='bg-[#D6B485] uppercase w-fit px-8 py-2 text-[#160647] hover:bg-yellow-300 transition duration-700'>Book Now</button>
        </div>
        </div>
        </div>
      </div>
    </section>
    <section className='sec5 pt-16 px-4'>
      <div className='mx-auto text-center text-[#160647]'>
        <h3 className='py-2 font-semibold'>Inspiring Travel Excellence---<IoIosAirplane className='plane' /></h3>
        <h4 className='text-3xl md:text-5xl volkov'>Our Traveling Winning Awards</h4>
      </div>
      <div className='py-16'>
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        breakpoints={{
          '@0.00': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper h-[30vh] md:h-[35vh]"
      >
        <SwiperSlide>
          <div className='w-[120px] sm:w-[150px] mx-auto'><img className='w-full' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/05/Hikez-award-logo-img2.png" alt="" /></div>
          <div className='bg-[#160647] text-nowrap mx-auto mt-6 w-fit px-6 py-2 uppercase text-xs sm:text-sm transition duration-700 font-[500] text-white hover:bg-yellow-300 hover:text-[#160647]'>View Document <MdKeyboardArrowRight className='inline-flex text-2xl' /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[120px] sm:w-[150px] mx-auto'><img className='w-full' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/05/Hikez-award-logo-img1.png" alt="" /></div>
          <div className='bg-[#160647] text-nowrap mx-auto mt-6 w-fit px-6 py-2 uppercase text-xs sm:text-sm transition duration-700 font-[500] text-white hover:bg-yellow-300 hover:text-[#160647]'>View Document <MdKeyboardArrowRight className='inline-flex text-2xl' /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[120px] sm:w-[150px] mx-auto'><img className='w-full' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/05/Hikez-award-logo-img4.png" alt="" /></div>
          <div className='bg-[#160647] text-nowrap mx-auto mt-6 w-fit px-6 py-2 uppercase text-xs sm:text-sm transition duration-700 font-[500] text-white hover:bg-yellow-300 hover:text-[#160647]'>View Document <MdKeyboardArrowRight className='inline-flex text-2xl' /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[120px] sm:w-[150px] mx-auto'><img className='w-full' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/05/Hikez-award-logo-img3.png" alt="" /></div>
          <div className='bg-[#160647] text-nowrap mx-auto mt-6 w-fit px-6 py-2 uppercase text-xs sm:text-sm transition duration-700 font-[500] text-white hover:bg-yellow-300 hover:text-[#160647]'>View Document <MdKeyboardArrowRight className='inline-flex text-2xl' /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[120px] sm:w-[150px] mx-auto'><img className='w-full' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/05/Hikez-award-logo-img5.png" alt="" /></div>
          <div className='bg-[#160647] text-nowrap mx-auto mt-6 w-fit px-6 py-2 uppercase text-xs sm:text-sm transition duration-700 font-[500] text-white hover:bg-yellow-300 hover:text-[#160647]'>View Document <MdKeyboardArrowRight className='inline-flex text-2xl' /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-[120px] sm:w-[150px] mx-auto'><img className='w-full' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/05/Hikez-award-logo-img6.png" alt="" /></div>
          <div className='bg-[#160647] text-nowrap mx-auto mt-6 w-fit px-6 py-2 uppercase text-xs sm:text-sm transition duration-700 font-[500] text-white hover:bg-yellow-300 hover:text-[#160647]'>View Document <MdKeyboardArrowRight className='inline-flex text-2xl' /></div>
        </SwiperSlide>
        </Swiper>
      </div>  
    </section>
    <section className='banner w-full'>
      <div className='flex flex-wrap md:flex-nowrap justify-between py-20 gap-2 px-12 items-center'>
        <div className='w-[410px] mx-auto'><img className='w-full -rotate-6' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/Blue-and-White-Nature-Travel-Agent-Flyer.jpg" alt="" /></div>
        <div className='text-white text-center py-2 mx-auto'>
          <div className='relative w-[90px] h-[90px] my-4 play rounded-full bg-transparent outline transition-all duration-1000 mx-auto'><FaPlay className='absolute top-[40%] left-[40%] text-2xl' /></div>
          <h4 className='text-5xl volkov'>Request A Free Brochure</h4>
          <p className=' py-4 px-12'>Ornare massa eget egestas purus viverra accumsan in nisl. Neque dolor sed viverra justo nec ultrices dui.</p>
          <div className='py-4'>Print Catelog <span className='mx-4'>|</span> Digital Catelog</div>
        </div>
        <div className='w-[360px] hidden md:inline-flex'><img className='w-full' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/05/Hikez-video-banner-img.jpg" alt="" /></div>
      </div>
    </section>
    <section>
      <div className='py-20 px-12 mx-auto select-none'>
        <div className='flex flex-wrap gap-4 justify-between items-end text-[#160647]'>
          <div>
        <h3 className='py-2 font-semibold text-sm'>Explore Best Packages---<IoIosAirplane className='plane' /></h3>
        <h4 className='text-3xl md:text-5xl volkov'>Select Your Dream Vacation</h4>
          </div>
          <div className='border border-[#160647] hover:bg-yellow-300 hover:border-yellow-300 transition-all duration-700 px-12 uppercase font-[500] text-sm py-4'>Browse All Trips</div>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-12'>
          <div className='relative text-white package-thumb overflow-hidden rounded-xl'>
            <img className='w-full transition-all duration-700' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/Trips-Image-2.jpg" alt="" />
            <div className='absolute z-10 left-6 bottom-8'>
              <h4 className='volkov text-2xl hover:text-yellow-300 transition duration-500'>Jeju Oedolgae Beach</h4>
              <div className='grid gap-1 py-4'>
                <span><LuClock className='inline-flex p-1 text-3xl' />(3 Days - 3 Nights)</span>
                <p><IoCalendarOutline className='inline-flex p-1 text-3xl' />All New Year (May - June)</p>
              </div>
              <button className='py-3 px-8 uppercase  bg-yellow-400 hover:bg-[#D6B485] transition-all duration-700 w-fit text-[#160647] font-[500]'>Explore Trip</button>
            </div>
          </div>
          <div className='relative text-white package-thumb overflow-hidden rounded-xl'>
            <img className='w-full transition-all duration-700' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/Trips-Image-3.jpg" alt="" />
            <div className='absolute z-10 left-6 bottom-8'>
              <h4 className='volkov text-2xl hover:text-yellow-300 transition duration-500'>Pyramids Of Giza</h4>
              <div className='grid gap-1 py-4'>
                <span><LuClock className='inline-flex p-1 text-3xl' />(6 Days - 5 Nights)</span>
                <p><IoCalendarOutline className='inline-flex p-1 text-3xl' />All New Year (JUne - Oct)</p>
              </div>
              <button className='py-3 px-8 uppercase  bg-yellow-400 hover:bg-[#D6B485] transition-all duration-700 w-fit text-[#160647] font-[500]'>Explore Trip</button>
            </div>
          </div>
          <div className='relative text-white package-thumb overflow-hidden rounded-xl'>
            <img className='w-full transition-all duration-700' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/egypt03.jpg" alt="" />
            <div className='absolute z-10 left-6 bottom-8'>
              <h4 className='volkov text-2xl hover:text-yellow-300 transition duration-500'>Nile Adventure</h4>
              <div className='grid gap-1 py-4'>
                <span><LuClock className='inline-flex p-1 text-3xl' />(5 Days - 5 Nights)</span>
                <p><IoCalendarOutline className='inline-flex p-1 text-3xl' />All New Year (Feb - Mar)</p>
              </div>
              <button className='py-3 px-8 uppercase  bg-yellow-400 hover:bg-[#D6B485] transition-all duration-700 w-fit text-[#160647] font-[500]'>Explore Trip</button>
            </div>
          </div>
          <div className='relative text-white package-thumb overflow-hidden rounded-xl'>
            <img className='w-full transition-all duration-700' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/france-02.jpg" alt="" />
            <div className='absolute z-10 left-6 bottom-8'>
              <h4 className='volkov text-2xl hover:text-yellow-300 transition duration-500'>France Heritage Tour</h4>
              <div className='grid gap-1 py-4'>
                <span><LuClock className='inline-flex p-1 text-3xl' />(3 Days - 2 Nights)</span>
                <p><IoCalendarOutline className='inline-flex p-1 text-3xl' />All New Year (Mar - May)</p>
              </div>
              <button className='py-3 px-8 uppercase  bg-yellow-400 hover:bg-[#D6B485] transition-all duration-700 w-fit text-[#160647] font-[500]'>Explore Trip</button>
            </div>
          </div>
          <div className='relative text-white package-thumb overflow-hidden rounded-xl'>
            <img className='w-full transition-all duration-700' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/usa04.jpg" alt="" />
            <div className='absolute z-10 left-6 bottom-8'>
              <h4 className='volkov text-2xl hover:text-yellow-300 transition duration-500'>Swiz Nature Tour</h4>
              <div className='grid gap-1 py-4'>
                <span><LuClock className='inline-flex p-1 text-3xl' />(7 Days - 5 Nights)</span>
                <p><IoCalendarOutline className='inline-flex p-1 text-3xl' />All New Year (Nov - Jan)</p>
              </div>
              <button className='py-3 px-8 uppercase  bg-yellow-400 hover:bg-[#D6B485] transition-all duration-700 w-fit text-[#160647] font-[500]'>Explore Trip</button>
            </div>
          </div>
          <div className='relative text-white package-thumb overflow-hidden rounded-xl'>
            <img className='w-full transition-all duration-700' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/usa3.jpg" alt="" />
            <div className='absolute z-10 left-6 bottom-8'>
              <h4 className='volkov text-2xl hover:text-yellow-300 transition duration-500'>Niagara Falls Tour</h4>
              <div className='grid gap-1 py-4'>
                <span><LuClock className='inline-flex p-1 text-3xl' />(2 Days - 1 Nights)</span>
                <p><IoCalendarOutline className='inline-flex p-1 text-3xl' />All New Year (Dec - Jan)</p>
              </div>
              <button className='py-3 px-8 uppercase  bg-yellow-400 hover:bg-[#D6B485] transition-all duration-700 w-fit text-[#160647] font-[500]'>Explore Trip</button>
            </div>
          </div>
          <div className='relative text-white package-thumb overflow-hidden rounded-xl'>
            <img className='w-full transition-all duration-700' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/usa02.jpg" alt="" />
            <div className='absolute z-10 left-6 bottom-8'>
              <h4 className='volkov text-2xl hover:text-yellow-300 transition duration-500'>East Coast Tour</h4>
              <div className='grid gap-1 py-4'>
                <span><LuClock className='inline-flex p-1 text-3xl' />(2 Days - 1 Nights)</span>
                <p><IoCalendarOutline className='inline-flex p-1 text-3xl' />All New Year (Feb - Apr)</p>
              </div>
              <button className='py-3 px-8 uppercase  bg-yellow-400 hover:bg-[#D6B485] transition-all duration-700 w-fit text-[#160647] font-[500]'>Explore Trip</button>
            </div>
          </div>
          <div className='relative text-white package-thumb overflow-hidden rounded-xl'>
            <img className='w-full transition-all duration-700' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/usa01.jpg" alt="" />
            <div className='absolute z-10 left-6 bottom-8'>
              <h4 className='volkov text-2xl hover:text-yellow-300 transition duration-500'>Route 66 Road Trip</h4>
              <div className='grid gap-1 py-4'>
                <span><LuClock className='inline-flex p-1 text-3xl' />(4 Days - 3 Nights)</span>
                <p><IoCalendarOutline className='inline-flex p-1 text-3xl' />All New Year (Dec - Feb)</p>
              </div>
              <button className='py-3 px-8 uppercase  bg-yellow-400 hover:bg-[#D6B485] transition-all duration-700 w-fit text-[#160647] font-[500]'>Explore Trip</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='teams'>
      <div className='md:flex py-20 mx-auto'>
        <div className='text-[#160647] md:w-[40%] lg:px-16 px-8 md:text-start text-center'>
          <h4 className='text-3xl sm:text-4xl lg:text-5xl volkov'>Enjoy Travel With Team Members</h4>
          <p className='text-xs py-4 sm:text-sm md:text-base'>Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Condimentum id venenatis a condimentum viet.</p>
        </div>
        <div className='lg:w-[60%] mx-auto sm:w-[50%] w-[80%]'>
        <Swiper
        loop={true}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className='relative w-full overflow-hidden package-thumb rounded-xl'>
            <img className='w-full rounded-xl transition-all duration-1000' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/Team-Image-7.jpg" alt="" />
            <div className='absolute left-6 bottom-6 text-white font-semibold z-10 opacity-85'>
              <h6 className='text-2xl volkov'>Laraa</h6>
              <span className='text-sm'>City Guide</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full overflow-hidden package-thumb rounded-xl'>
            <img className='w-full rounded-xl transition-all duration-1000' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/06/Hikez-team-img2.jpg" alt="" />
            <div className='absolute left-6 bottom-6 text-white font-semibold z-10 opacity-85'>
              <h6 className='text-2xl volkov'>Alex</h6>
              <span className='text-sm'>Photographer</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full overflow-hidden package-thumb rounded-xl'>
            <img className='w-full rounded-xl transition-all duration-1000' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/06/Hikez-team-img3.jpg" alt="" />
            <div className='absolute left-6 bottom-6 text-white font-semibold z-10 opacity-85'>
              <h6 className='text-2xl volkov'>Akeri</h6>
              <span className='text-sm'>Language Guide</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full overflow-hidden package-thumb rounded-xl'>
            <img className='w-full rounded-xl transition-all duration-1000' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/06/Hikez-team-img4.jpg" alt="" />
            <div className='absolute left-6 bottom-6 text-white font-semibold z-10 opacity-85'>
              <h6 className='text-2xl volkov'>Paul</h6>
              <span className='text-sm'>Travel Guide</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative w-full overflow-hidden package-thumb rounded-xl'>
            <img className='w-full rounded-xl transition-all duration-1000' src="https://wdthikez.wpengine.com/wp-content/uploads/2024/07/Team-Image-8.jpg" alt="" />
            <div className='absolute left-6 bottom-6 text-white font-semibold z-10 opacity-85'>
              <h6 className='text-2xl volkov'>Adam</h6>
              <span className='text-sm'>Wildlife Guide</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
      </div>
    </section>
    </>
  );
}
