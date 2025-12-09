import React from "react";
import { GiBookshelf } from "react-icons/gi";

export default function Navbar() {
    return (
        <nav className="w-full bg-gray-300 shadow-xl rounded-b-2xl px-6 py-4 flex items-center justify-between fixed top-0 left-0 z-50">

            <div className="text-4xl font-bold tracking-wide"><GiBookshelf /></div>

            <ul className="flex space-x-6 text-lg font-medium">
                <li className="cursor-pointer hover:text-blue-600 transition duration-200">HOME</li>
                <li className="cursor-pointer hover:text-blue-600 transition duration-200">ABOUT</li>
                <li className="cursor-pointer hover:text-blue-600 transition duration-200">CONTACT</li>
            </ul>
        </nav>
    );
}
