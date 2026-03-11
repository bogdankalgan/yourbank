import {NavLink} from "react-router-dom";

export default function LinkButton({to, text}) {
    return (
        <NavLink to={to} className="bg-green-60 text-lg max-mobile:text-sm rounded-full px-7 py-4 max-mobile:px-5 max-mobile:py-3 transition duration-300 hover:bg-transparent hover:text-white active:bg-green-60 active:text-black">{text}</NavLink>
    )
}