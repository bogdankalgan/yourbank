import MissionCard from "@/widgets/mission/ui/MissionCard.jsx";
import missionImg from "@/shared/assets/images/mission.png"
import visionImg from "@/shared/assets/images/vision.png"

export default function Mission() {
    return (
        <section className="flex flex-col gap-80 max-mobile:gap-[60px] max-mobile:text-center max-mobile:items-center">
            <div className="flex flex-col gap-3.5">
                <h2><span>Mission & Vision</span></h2>
                <p className="text-grey-70 max-mobile:text-sm">We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development</p>
            </div>

            <div className="flex flex-col gap-[100px] max-mobile:gap-[50px]">
                <MissionCard title="Mission" descr="At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams." imgSrc={missionImg}/>

                <MissionCard title="Vision" descr="Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction." imgSrc={visionImg} reversed/>
            </div>
        </section>
    )
}