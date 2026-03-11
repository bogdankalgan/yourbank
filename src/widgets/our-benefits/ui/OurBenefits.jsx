import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChartColumn} from "@fortawesome/free-solid-svg-icons";

import {FeatureCard} from "@/shared/ui/";

export default function OurBenefits() {
    return (
        <section className="flex flex-col gap-80 max-tablet:gap-14">
            <div className="flex flex-col gap-3.5">
                <h2 className="max-mobile:text-center">Our <span>Benefits</span></h2>
                <p className="text-grey-70 max-tablet:text-16 max-mobile:text-center">At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.</p>
            </div>

            <div className="grid grid-cols-2 gap-x-[30px] gap-y-[100px] max-tablet:gap-x-5 max-tablet:gap-y-[48px] max-mobile:grid-cols-1 max-mobile:gap-5">
                <FeatureCard title={"Competitive Compensation"} descr={"We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth."} icon={<FontAwesomeIcon icon={faChartColumn}/>} className="rounded-tl-[50px] rounded-tr-[20px] rounded-br-[50px] rounded-bl-[20px] max-tablet:rounded-tl-[40px] max-tablet:rounded-tr-[14px] max-tablet:rounded-br-[40px] max-tablet:rounded-bl-[14px] max-mobile:rounded-tl-[40px] max-mobile:rounded-tr-[40px] max-mobile:rounded-br-[14px] max-mobile:rounded-bl-[14px] gap-[30px] max-tablet:gap-6 max-mobile:gap-5 border border-green-60/10"/>

                <FeatureCard icon={<FontAwesomeIcon icon={faChartColumn} />} descr={"We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle."} title={"Health and Wellness"}  className="rounded-tl-[50px] rounded-tr-[20px] rounded-br-[50px] rounded-bl-[20px] max-tablet:rounded-tl-[40px] max-tablet:rounded-tr-[14px] max-tablet:rounded-br-[40px] max-tablet:rounded-bl-[14px] max-mobile:rounded-tl-[40px] max-mobile:rounded-tr-[40px] max-mobile:rounded-br-[14px] max-mobile:rounded-bl-[14px] gap-[30px] max-tablet:gap-6 max-mobile:gap-5 border border-green-60/10"/>

                <FeatureCard icon={<FontAwesomeIcon icon={faChartColumn} />} descr={"YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term."} title={"Retirement Planning"}  className="rounded-tl-[50px] rounded-tr-[20px] rounded-br-[50px] rounded-bl-[20px] max-tablet:rounded-tl-[40px] max-tablet:rounded-tr-[14px] max-tablet:rounded-br-[40px] max-tablet:rounded-bl-[14px] max-mobile:rounded-tl-[40px] max-mobile:rounded-tr-[40px] max-mobile:rounded-br-[14px] max-mobile:rounded-bl-[14px] gap-[30px] max-tablet:gap-6 max-mobile:gap-5 border border-green-60/10"/>

                <FeatureCard icon={<FontAwesomeIcon icon={faChartColumn} />} descr={"We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments."} title={"Work-Life Balance"}  className="rounded-tl-[50px] rounded-tr-[20px] rounded-br-[50px] rounded-bl-[20px] max-tablet:rounded-tl-[40px] max-tablet:rounded-tr-[14px] max-tablet:rounded-br-[40px] max-tablet:rounded-bl-[14px] max-mobile:rounded-tl-[40px] max-mobile:rounded-tr-[40px] max-mobile:rounded-br-[14px] max-mobile:rounded-bl-[14px] gap-[30px] max-tablet:gap-6 max-mobile:gap-5 border border-green-60/10"/>
            </div>
        </section>
    )
}

