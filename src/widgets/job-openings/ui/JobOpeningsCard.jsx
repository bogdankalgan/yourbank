import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";
import {LinkButton} from "@/shared/ui/";
import {ROUTES} from "@/shared/config/routes.js";

export default function JobOpeningsCard({title, location, department, descr, requirements=[]}) {
    return (
        <div className="p-12 bg-grey-11 border border-grey-15 rounded-2xl basis-[calc(50%-15px)] grow-0 max-tablet:basis-[calc(50%-10px)] max-tablet:p-10 max-mobile:p-6">
            <div className="flex flex-col gap-3.5 mb-12 max-tablet:mb-10 max-tablet:gap-2.5 max-mobile:mb-7">
                <h3 className="font-semibold text-3xl max-tablet:text-2xl max-mobile:text-xl">
                    {title}
                </h3>

                <div className="flex items-center gap-2.5 max-tablet:gap-1.5 max-mobile:flex-wrap">
                    <div className="bg-grey-10 border border-grey-15 rounded-full py-2 px-4 max-tablet:px-3.5 max-tablet:py-1.5 max-mobile:px-2.5">
                        <p className="text-grey-70 text-lg max-tablet:text-16 max-mobile:text-sm">Location: {location}</p>
                    </div>

                    <div className="bg-grey-10 border border-grey-15 rounded-full py-2 px-4 max-tablet:px-3.5 max-tablet:py-1.5 max-mobile:px-2.5">
                        <p className="text-grey-70 text-lg max-tablet:text-16 max-mobile:text-sm">Department: {department}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-20 mb-10 max-tablet:gap-4 max-mobile:mb-7 max-mobile:gap-2">
                <h4 className="text-2xl font-semibold max-tablet:text-xl max-mobile:text-lg">About This Job</h4>
                <p className="text-grey-70 max-tablet:text-16">{descr}</p>
            </div>

            <div className="flex flex-col gap-20 mb-12 max-tablet:gap-3.5 max-tablet:mb-10 max-mobile:mb-7">
                <h4 className="text-2xl font-semibold max-tablet:text-xl max-mobile:text-lg">Requirements & Qualifications</h4>

                <ul className="flex flex-col gap-5 max-tablet:gap-4">
                    {requirements.map((req, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-grey-70 max-tablet:gap-2">
                            <FontAwesomeIcon icon={faBriefcase} />
                            <p className="text-grey-70 font-light max-tablet:text-16 max-mobile:text-sm">{req}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <LinkButton text={"Apply Now"} to={ROUTES.SIGNUP}/>
            </div>
        </div>
    )
}