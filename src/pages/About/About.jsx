import heroImage from "@/shared/assets/images/1.png"
import HeroSection from "@/widgets/hero-section/";
import Mission from "@/widgets/mission/";
import PressRelease from "@/widgets/press-release/";

export default function About() {
    return (
        <div className="px-40 max-tablet:px-80 max-mobile:px-4 flex flex-col gap-150 max-tablet:gap-120 max-mobile:gap-80">
            <HeroSection title={`Where Banking Meets Excellence!`} descr={"At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence."} imgSrc={heroImage}/>
            <Mission/>
            <PressRelease/>
        </div>
    )
}