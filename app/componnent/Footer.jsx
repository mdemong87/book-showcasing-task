import Link from "next/link";
import { FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaLinkedinIn, FaLocationPin, FaVimeoV, FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import Container from "./Container";

const Footer = () => {
    return (
        <footer className="footerBg">
            <Container>
                <div className="py-10">
                    <div>
                        <div className="flex flex-col md:flex-row justify-between items-cetner gap-5 py-5 pFont">
                            <div className="w-full">
                                <h3 className="text-2xl text-gray-600 py-3">Contact</h3>
                                <ul className="text-gray-500">
                                    <Link target="blank" href={"https://maps.app.goo.gl/m5Ftu2s35fh5fvY58"} className="flex items-center gap-2">
                                        <IoLogoWhatsapp className="text-xl" />
                                        <span>+880 1911095079</span>
                                    </Link>
                                    <Link href={"https://maps.app.goo.gl/m5Ftu2s35fh5fvY58"} target="blank" className="flex items-start gap-2 mt-3">
                                        <FaLocationPin className="text-2xl md:text-4xl" />
                                        <span>
                                            House 126, Road 05, Journalist Area, Mirpur -12, Dhaka -1216, Bangladesh
                                        </span>
                                    </Link>
                                </ul>
                            </div>
                            <div className="w-full flex flex-col md:items-end">
                                <h3 className="text-2xl py-3 text-gray-600 pr-4">Follow us</h3>
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-4 items-center">
                                        <Link target="blank" href={"https://www.linkedin.com/company/pensdio/?viewAsMember=true"}>
                                            <FaLinkedinIn className="text-lg text-gray-500" />
                                        </Link>
                                        <Link target="blank" href={"https://www.facebook.com/Pensdio/"}>
                                            <FaFacebookF className="text-lg text-gray-500" />
                                        </Link>
                                        <Link target="blank" href={"https://www.instagram.com/pensdio21/"}>
                                            <FaInstagram className="text-lg text-gray-500" />
                                        </Link>
                                        <Link target="blank" href={"https://twitter.com/pensdio21"}>
                                            <FaXTwitter className="text-lg text-gray-500" />
                                        </Link>

                                    </div>
                                    <div className="flex gap-4 items-center mt-3">
                                        <Link target="blank" href={"https://www.tiktok.com/@pensdio21"}>
                                            <FaTiktok className="text-lg text-gray-500" />
                                        </Link>
                                        <Link target="blank" href={"https://www.behance.net/Pensdio"}>
                                            <FaBehance className="text-lg text-gray-500" />
                                        </Link>

                                        <Link target="blank" href={"https://vimeo.com/pensdio21"}>
                                            <FaVimeoV className="text-lg text-gray-500" />
                                        </Link>

                                        <Link target="blank" href={"https://dribbble.com/pensdio"}>
                                            <FaDribbble className="text-lg text-gray-500" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-col md:items-end text-left">
                                <h3 className="text-2xl text-gray-600 py-3">Resources</h3>
                                <ul className="text-gray-500 pr-4">
                                    <li>Case studies</li>
                                    <li>Privacy Policy</li>
                                    <li>Newsletter</li>
                                    <li>FAQ</li>
                                </ul>
                            </div>
                            <div className="w-full flex flex-col md:items-end">
                                <h3 className="text-2xl text-gray-600 py-3">Company</h3>
                                <ul className="text-gray-500 pr-10">
                                    <li>
                                        <Link href={"/"}>Home</Link>
                                    </li>
                                    <li>
                                        <Link href={"/work"}>Works</Link>
                                    </li>
                                    <li>
                                        <Link href={"/about"}>About us</Link>
                                    </li>
                                    <li>
                                        <Link href={"/blog"}>Blogs</Link>
                                    </li>
                                    <li>
                                        <Link href={"/review"}>Reviews</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <div className="pBg text-white">
                <Container>
                    <div className="flex items-center flex-wrap justify-center text-center py-4">
                        <p>&#169; 2024 All Right Reserved by Book-Showcase | </p>
                        <Link className="pl-2" href={'https://emonhossen.xyz'}>Developed by Md Emon Hossen</Link>
                    </div>
                </Container>
            </div>
        </footer>
    )
}

export default Footer;