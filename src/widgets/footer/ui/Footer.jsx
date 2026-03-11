import {faEnvelope, faLocationDot, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faSquareTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import siteLogo from "@/shared/assets/icons/site-logo/site-logo.png"
import {ROUTES} from "@/shared/config/routes.js";

export default function Footer() {
    return (
        <footer className="px-40 max-tablet:px-[80px] max-mobile:px-4">
            <div className="flex flex-col items-center gap-12 max-mobile:gap-10 border-b border-grey-15 pb-12 max-mobile:pb-7 pt-150 max-mobile:pt-[50px]">
                <div>
                    <img src={siteLogo} className="max-tablet:w-[132px] max-mobile:w-[110px] h-[34px] max-mobile:h-[28px]" alt="YourBank logo"/>
                </div>

                <nav aria-label="Footer navigation">
                    <ul className="flex items-center gap-6 text-white text-lg max-tablet:text-sm">
                        <li>
                            <NavLink to={ROUTES.HOME} className="transition duration-300 hover:text-green-60 active:text-white">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to={ROUTES.CAREERS} className="transition duration-300 hover:text-green-60 active:text-white">Careers</NavLink>
                        </li>

                        <li>
                            <NavLink to={ROUTES.ABOUT} className="transition duration-300 hover:text-green-60 active:text-white">About</NavLink>
                        </li>

                        <li>
                            <NavLink to={ROUTES.SECURITY} className="transition duration-300 hover:text-green-60 active:text-white">Security</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="py-12 max-tablet:py-10 flex justify-center border-b border-grey-15 mb-12">
                <ul className="flex gap-5 flex-wrap justify-center">
                    <li className="flex items-center gap-1.5 text-white text-lg max-tablet:text-sm transition duration-300 hover:text-green-60 active:text-white">
                        <div className="text-green-60">
                            <FontAwesomeIcon icon={faEnvelope}/>
                        </div>
                        <a href="mailto:kalganbogdan@gmail.com" target="_blank" rel="noopener noreferrer">kalganbogdan@gmail.com</a>
                    </li>

                    <li className="flex items-center gap-1.5 text-white text-lg max-tablet:text-sm transition duration-300 hover:text-green-60 active:text-white">
                        <div className="text-green-60">
                            <FontAwesomeIcon icon={faPhone}/>
                        </div>
                        <a href="tel:+9191813232309">+91 91813 23 2309</a>
                    </li>

                    <li className="flex items-center gap-1.5 text-white text-lg max-tablet:text-sm transition duration-300 hover:text-green-60 active:text-white">
                        <div className="text-green-60">
                            <FontAwesomeIcon icon={faLocationDot}/>
                        </div>
                        <span>Kyiv, Ukraine</span>
                    </li>
                </ul>
            </div>

            <div className="bg-grey-10 border border-grey-15 rounded-full py-4 pl-4 pr-8 max-mobile:py-6 max-mobile:px-6 flex items-center justify-between max-mobile:flex-col max-mobile:gap-6 max-mobile:rounded-xl">
                <ul className="flex items-center gap-3.5 text-green-60 text-5xl max-tablet:text-4xl max-mobile:text-xl" aria-label="Social media links">
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=61558589740805" rel="noopener noreferrer" target="_blank" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook}/></a>
                    </li>

                    <li>
                        <a href="https://x.com/?lang=ru" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FontAwesomeIcon icon={faSquareTwitter}/></a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/company/yourbank" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin}/></a>
                    </li>
                </ul>

                <p className="text-grey-shades-70 max-tablet:text-sm">YourBank All Rights Reserved</p>

                <div className="flex items-center gap-3 text-grey-shades-70 text-lg font-light max-tablet:text-sm">
                    <span className="whitespace-nowrap cursor-pointer">Privacy Policy</span>
                    <div className="w-px h-7 bg-grey-shades-70"></div>
                    <span className="whitespace-nowrap cursor-pointer">Terms of Service</span>
                </div>
            </div>
        </footer>
    )
}
