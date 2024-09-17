import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { LuMails } from "react-icons/lu";
import { HiOutlinePhone } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { SiMessenger } from "react-icons/si";
import { SiVisa } from "react-icons/si";
import { FaApplePay } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer>
        <section className='footer1'>
          <div className='container grid gap-8 md:gap-0 md:grid-cols-2 lg:grid-cols-4 py-20 px-4 text-white'>
            <div>
              <h6 className='font-bold text-2xl pb-6'>Contact Us</h6>
              <ul className='grid gap-5'>
                <li><SlLocationPin className='inline-flex mr-3 text-xl'/>No: 58 A, East Madison Street, MD, USA</li>
                <li><LuMails className='inline-flex mr-3 text-xl'/><a href="">contact@example.com</a></li>
                <li><HiOutlinePhone className='inline-flex mr-3 text-xl'/><a href="">+ 00 123456 789, + 00 12 34 56 78 9</a></li>
                <li><span className='inline-flex mr-3 text-sm font-[800]'>IG:</span><a href="">hikezadventures</a></li>
                <li><span className='inline-flex mr-3 text-sm font-[800]'>FB:</span><a href="">hikezadventures</a></li>
                <li><span className='inline-flex mr-3 text-sm font-[800]'>YT:</span><a href="">hikezadventures</a></li>
              </ul>
            </div>
            <div className='md:inline hidden'>
            <h6 className='font-bold text-2xl pb-6'>Useful Links</h6>
              <ul className='grid gap-5'>
                <li><a href="">Shipping Details</a></li>
                <li><a href="">Search</a></li>
                <li><a href="">Information</a></li>
                <li><a href="">Packages</a></li>
                <li><a href="">Privacy Policy</a></li>
              </ul>
            </div> 
            <div className='hidden sm:inline'>
            <h6 className='font-bold text-2xl pb-6'>Help</h6>
              <ul className='grid gap-5'>
                <li><a href="">Contact Us</a></li>
                <li><a href="/aboutus">About Us</a></li>
                <li><a href=""></a>careers</li>
                <li><a href="">Refund & Returns</a></li>
                <li><a href="">Deliveries</a></li>
              </ul>
            </div>
            <div>
              <h6 className='font-bold text-2xl pb-6'>Newsletter</h6>
              <p className='pb-5'>Subscribe and get minified at first on the latest update and offers!</p>
              <div className='grid gap-4'>
                <input type="email" placeholder='Your Email Address' className='py-3 px-6 w-full font-[400] text-black focus:outline-none focus:ring-yellow-300 focus:ring-1' />
                <button className='bg-[#FBD71C] hover:bg-[#D6B485] transition duration-700 uppercase py-3 px-4 w-full text-[#160647] font-[600]'>Subscribe</button>
                <div className='gap-4 inline-flex mt-6 cursor-pointer'>
                  <div className='rounded-full w-fit p-2 border border-white/60 hover:bg-yellow-300 hover:text-black'><FaFacebook className='text-lg' /></div>
                  <div className='rounded-full w-fit p-2 border border-white/60 hover:bg-yellow-300 hover:text-black'><FaXTwitter className='text-lg' /></div>
                  <div className='rounded-full w-fit p-2 border border-white/60 hover:bg-yellow-300 hover:text-black'><FaSquareInstagram className='text-lg' /></div>
                  <div className='rounded-full w-fit p-2 border border-white/60 hover:bg-yellow-300 hover:text-black'><SiMessenger className='text-lg' /></div>
                </div>
              </div>
            </div>
          </div>
          <div className='border-t border-white/60 py-6'>
            <div className="container text-white flex justify-between items-center">
              <div className='text-sm hidden lg:inline'>Engage one of our knowledgeable travel consultants right now.</div>
              <div className='text-sm mx-auto md:mx-0'>Copyright@<a href='/' className='text-yellow-300'>hikez.com</a>, All Rights Reserved 2024</div>
              <div className='hidden md:flex gap-5'>
                <SiVisa className='text-5xl inline-flex'/>
                <FaApplePay className='text-5xl inline-flex'/>
                <FaGooglePay className='text-5xl inline-flex'/>
                <div className='inline-flex items-center pasa text-xl'>Pasa</div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer
