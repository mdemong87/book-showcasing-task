"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Container from "./Container";


const Navber = () => {

    const pathName = usePathname();
    const [showNav, setshowNav] = useState(false);

    return (
        <header className={`pBg fixed top-0 w-full z-50" `}>
            <Container>

                <div className="flex flex-col lg:flex-row items-center lg:justify-between p-4">
                    < div className="flex justify-between items-center w-full lg:w-fit" >

                        <Link className="flex items-center gap-4" href={"/"}>
                            <IoBookSharp className="text-white text-6xl" />
                            <h1 className="text-3xl text-nowrap text-white font-bold">Book-Showcase</h1>
                        </Link>

                        {
                            showNav ? <RxCross2 onClick={() => setshowNav(!showNav)} className={`text-3xl cursor-pointer lg:hidden ${pathName == "/" || pathName == "/books" || pathName == "/addbooks" ? "text-white" : "pCl"}`} /> : <FaBars onClick={() => setshowNav(!showNav)} className={`text-2xl cursor-pointer lg:hidden ${pathName == "/" || pathName == "/books" || pathName == "/addbooks" ? "text-white" : "pCl"}`} />
                        }
                    </div >


                    <nav className={`w-full h-screen lg:h-full lg:flex lg:justify-end transition-all ${showNav ? "block" : "hidden"}`}>





                        <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 rounded-lg lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 text-lg">
                            <li onClick={() => { setshowNav(false) }}>
                                <Link href="/" className={`block py-2 px-3 rounded lg:p-0 text-white ${pathName == "/" && " underline decoration-2 underline-offset-4"}`}>Home</Link>
                            </li>

                            <li onClick={() => { setshowNav(false) }}>
                                <Link href="/books" className={`block py-2 px-3 rounded lg:p-0 text-white ${pathName == "/books" && " underline decoration-2 underline-offset-4"}`}>Books</Link>
                            </li>


                            <li onClick={() => { setshowNav(false) }}>
                                <Link href="/addbooks" className={`block py-2 px-3 rounded lg:p-0 text-white ${pathName == "/addbooks" && " underline decoration-2 underline-offset-4"}`}>Add Book</Link>
                            </li>

                        </ul>

                    </nav>
                </div>
            </Container>
        </header>

    )
}


export default Navber;