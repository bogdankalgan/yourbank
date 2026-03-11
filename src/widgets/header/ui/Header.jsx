import {NavLink} from "react-router-dom";
import {useState} from "react";
import siteLogo from "@/shared/assets/icons/site-logo/site-logo.png"
import {ROUTES} from "@/shared/config/routes.js";

export default function Header() {
    const linkClass = ({isActive}) => `text-white text-lg max-tablet:text-sm ${isActive ? "py-3 px-6 bg-grey-15 rounded-full max-tablet:px-4 max-tablet:py-2.5" : "hover:text-green-60 transition duration-300"}`

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="bg-grey-10 pt-18 pr-28 pl-40 max-tablet:px-[80px] pb-12 max-tablet:pb-7 max-mobile:pt-10 max-mobile:px-4 max-mobile:pb-0">
            <header className="bg-grey-11 border-grey-15 border-2 rounded-full px-8 py-5 flex justify-between items-center max-mobile:py-3.5 max-mobile:pl-6 max-mobile:pr-3.5">
                <div>
                    <img src={siteLogo} className="max-tablet:w-[116px] max-tablet:h-[30px] max-mobile:w-[100px] max-mobile:h-[26px]" alt="YourBank logo"/>
                </div>

                <nav aria-label="Main navigation" className="max-mobile:hidden">
                    <ul className="flex items-center gap-6 text-white">
                        <li>
                            <NavLink to={ROUTES.HOME} className={linkClass}>Home</NavLink>
                        </li>

                        <li>
                            <NavLink to={ROUTES.CAREERS} className={linkClass}>Careers</NavLink>
                        </li>

                        <li>
                            <NavLink to={ROUTES.ABOUT} className={linkClass}>About</NavLink>
                        </li>

                        <li>
                            <NavLink to={ROUTES.SECURITY} className={linkClass}>Security</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="flex gap-8 text-white text-lg max-tablet:text-sm items-center max-mobile:hidden">
                    <NavLink to={ROUTES.SIGNUP} className="transition duration-300 hover:text-green-60 active:text-white">Sign up</NavLink>
                    <NavLink to={ROUTES.LOGIN} className="bg-green-60 text-black rounded-full py-3.5 px-7 max-tablet:py-3 max-tablet:px-6 transition duration-300 hover:bg-grey-11 hover:text-white active:bg-green-60 active:text-black">Login</NavLink>
                </div>

                <button type="button" className="group hidden max-mobile:flex flex-col items-end bg-green-60 gap-1 px-4 py-3 rounded-full" aria-label="Menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
                    <span className="bg-grey-10 w-[21px] h-0.5 rounded-full"></span>
                    <span className="bg-grey-10 w-[21px] h-0.5 rounded-full"></span>
                    <span className="bg-grey-10 w-[10px] h-0.5 rounded-full group-active:w-[21px] transition duration-300"></span>
                </button>


                {isOpen && (
                    <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-50 z-10 px-4 py-4 flex flex-col gap-15" role="dialog" aria-label="Navigation menu">
                        <div className="flex justify-end items-end">
                            <button type="button" className="flex items-end text-black px-2 py-1 text-xl bg-green-60 rounded-full transition duration-300 active:bg-black active:text-white" aria-label="Close menu" onClick={() => setIsOpen(false)}>X</button>
                        </div>

                        <ul className="flex flex-col gap-10 items-center text-white text-3xl">
                            <li>
                                <NavLink to={ROUTES.HOME} className="active:text-green-60 transition duration-300">Home</NavLink>
                            </li>

                            <li>
                                <NavLink to={ROUTES.CAREERS} className="active:text-green-60 transition duration-300">Careers</NavLink>
                            </li>

                            <li>
                                <NavLink to={ROUTES.ABOUT} className="active:text-green-60 transition duration-300">About</NavLink>
                            </li>

                            <li>
                                <NavLink to={ROUTES.SECURITY} className="active:text-green-60 transition duration-300">Security</NavLink>
                            </li>
                        </ul>

                        <div className="flex flex-col items-center gap-6">
                            <NavLink to={ROUTES.LOGIN} className="text-white text-3xl transition duration-300 active:text-green-60">Login</NavLink>
                            <NavLink to={ROUTES.SIGNUP} className="text-black bg-green-60 text-3xl px-4 py-2 rounded-full transition duration-300 active:text-white active:bg-black">Sign up</NavLink>
                        </div>
                    </div>
                )}
            </header>
        </div>
    )
}
