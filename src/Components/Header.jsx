import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
import { GoArrowSwitch } from "react-icons/go";
import { FaToggleOn } from "react-icons/fa";
import logo from '../img/airbnb-logo.png';
import type1 from '../img/type1.jpeg';
import type2 from '../img/type2.jpeg';
import type3 from '../img/type3.jpeg';
import type4 from '../img/type4.jpeg';
import type5 from '../img/type5.jpeg';
import type6 from '../img/type6.jpeg';
import type7 from '../img/type7.jpeg';
import type8 from '../img/type8.jpeg';
import type9 from '../img/type9.jpeg';
import type10 from '../img/type10.jpeg';
import type11 from '../img/type11.jpeg';
import type12 from '../img/type12.jpeg';

const Header = () => {
    return (
        // Navbar
        <div className='overflow-x-hidden'>
            <div className="w-screen px-16 grid grid-cols-3 h-20 border-b-[1px] items-center fixed top-0 bg-white">
                <div className="pl-15">
                    <img src={logo} alt='logo' className="h-16 w-28" />
                </div>

                <div className="px-8">
                    <div className="flex items-center justify-evenly rounded-full shadow-md h-12 w-96 border">
                        <button className="border-r-2 border-gray-100 px-4 text-sm font-medium">Anywhere</button>
                        <button className="border-r-2 border-gray-100 px-4 text-sm font-medium">Any week</button>
                        <button className="border-gray-100 px-4 gray-text">Add guests</button>
                        <i className="fa-solid fa-magnifying-glass bg-red-500 text-white rounded-full p-2"></i>
                    </div>
                </div>


                <div className="flex justify-end items-center pr-15 gap-8">
                    <p className="text-sm font-medium">Airbnb your home</p>
                    <span className="material-symbols-outlined">language</span>
                    <div className="flex justify-evenly items-center py-1.25 pr-1.25 pl-3 gap-2 rounded-full shadow-md h-10 w-20 border">
                        <i className="fa-solid fa-bars"></i>
                        <p className="bg-black text-white rounded-full w-7 h-7 text-center pt-1.5 text-[10px] font-semibold">E</p>
                    </div>
                </div>
            </div>

            {/* Category bar */}

            <div className="h-24 w-screen flex items-center space-x-5 fixed top-20 bg-white px-16">
                <div className="flex items-center space-x-10 justify-center">
                    <div className="category">
                        <img src={type1} className="h-6 w-6 text-gray-400" />
                        <p className="category-text">Amazing pools</p>
                    </div>
                    <div className="category">
                        <img src={type2} className="h-6 w-6 text-gray-400" />
                        <p className="category-text">Play</p>
                    </div>
                    <div className="category">
                        <img src={type3} className="h-6 w-6 text-gray-400" />
                        <p className="category-text">Historical Homes</p>
                    </div>
                    <div className="category">
                        <img src={type4} className="h-6 w-6 text-gray-400" />
                        <p className="category-text">Countryside</p>
                    </div>
                    <div className="category">
                        <img src={type5} className="h-6 w-6 text-gray-400" />
                        <p className="category-text">Surfing</p>
                    </div>
                    <div className="category">
                        <img src={type6} className="h-6 w-6 text-gray-400" />
                        <p className="category-text">Farms</p>
                    </div>
                    <div className="category">
                        <img src={type7} className="h-6 w-6 text-gray-400" />
                        <p className="category-text">Amazing views</p>
                    </div>
                    <div className="category">
                        <img src={type8} className="h-6 w-6 text-gray-400" />
                        <p className="category-text">Rooms</p>
                    </div>
                    <div className="category">
                        <img src={type9} className="h-6 w-6 text-gray-400" />
                        <p className="category-text">Lakefront</p>
                    </div>
                    <div className="category">
                        <img src={type10} className="h-6 w-6 text-gray-400" />
                        <p className="category-text">Beachfront</p>
                    </div>
                    <div className="category">
                        <img src={type11} className="h-6 w-6 text-gray-400" />
                        <p className="category-text">OMG!</p>
                    </div>
                    <div className="category">
                        <img src={type12} className="h-6 w-6 text-gray-400" />
                        <p className="category-text">Golfing</p>
                    </div>
                </div>
                <FaArrowAltCircleRight />
                <div className="flex justify-around items-center rounded-xl shadow-md h-12 w-24 border">
                <GoArrowSwitch />
                    <p className="text-xs font-medium pr-2">Filters</p>
                </div>

            </div>


            {/* Price bar */}
            <section className="flex justify-center w-screen mt-48">
                <div className="flex items-center justify-between rounded-xl p-4 border w-[600px] h-16">
                    <div className="w-[460px] flex justify-start">
                        <p className="border-r-2 border-gray-100 pr-4 text-base font-medium">Display total price</p>
                        <p className="border-gray-100 text-base text-gray-400 pl-4">Includes all fees, before taxes</p>
                    </div>
                    <FaToggleOn />
                </div>
            </section>

        </div>
    )
}

export default Header;
