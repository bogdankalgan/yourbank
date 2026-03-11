import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

export default function OurFeaturesCard({title, descr}) {
    return (
        <div className="flex flex-col gap-7 max-mobile:gap-5 bg-grey-11 border border-grey-15 rounded-xl p-12 max-tablet:p-8 max-mobile:p-[30px]">
            <div className="flex justify-between text-white text-xl max-mobile:text-lg">
                {title}
                <div className="text-green-60 text-2xl">
                    <FontAwesomeIcon icon={faArrowRight} className="transform rotate-[-45deg]"/>
                </div>
            </div>

            <p className="text-grey-70">{descr}</p>
        </div>
    )
}