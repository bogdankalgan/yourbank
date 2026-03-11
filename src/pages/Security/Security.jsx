import securityHeroImg from "@/shared/assets/images/securityHero.png"
import HeroSection from "@/widgets/hero-section";
import Protect from "@/widgets/protect";
import Faq from "@/widgets/faq";


export default function Security() {
    return (
        <div className="px-40 max-tablet:px-80 max-mobile:px-4 flex flex-col gap-150 max-tablet:gap-120 max-mobile:gap-80">
            <HeroSection title={`Your Security is Our Top Priority`} descr={"At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority."} imgSrc={securityHeroImg}/>

            <Protect/>
            <Faq/>
        </div>
    )
}