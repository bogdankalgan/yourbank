import CareersImage from "@/shared/assets/images/Image.png"
import HeroSection from "@/widgets/hero-section/";
import OurValues from "@/widgets/our-values/";
import OurBenefits from "@/widgets/our-benefits/";
import JobOpenings from "@/widgets/job-openings/";
import Faq from "@/widgets/faq/";
import CTA from "@/widgets/cta/";

export default function Careers() {
    return (
        <div className="px-40 max-tablet:px-80 max-mobile:px-4 max-mobile:pt-12 flex flex-col gap-150 max-tablet:gap-120 max-mobile:gap-80">
            <HeroSection title={<>Welcome to <span>YourBank</span> Careers!</>} descr={"Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking."} imgSrc={CareersImage}/>

            <OurValues/>
            <OurBenefits/>
            <JobOpenings/>
            <Faq/>
            <CTA/>
        </div>
    )
}