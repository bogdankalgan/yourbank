import PressReleaseCard from "@/widgets/press-release/ui/PressReleaseCard.jsx";
import pressRelease1 from "@/shared/assets/images/pressRelease1.png"
import pressRelease2 from "@/shared/assets/images/pressRelease2.png"
import pressRelease3 from "@/shared/assets/images/pressRelease3.png"
import pressRelease4 from "@/shared/assets/images/pressRelease4.png"

export default function PressRelease() {
    return (
        <section className="flex flex-col gap-80 max-tablet:gap-[60px] max-mobile:gap-[60px]">
            <div className="flex flex-col gap-3.5 max-mobile:text-center">
                <h2><span>Press Releases</span></h2>
                <p className="text-grey-70 max-tablet:text-base max-mobile:text-sm">Stay updated with the latest happenings and exciting developments at YourBank through our press releases.</p>
            </div>

            <div className="grid grid-cols-2 gap-[30px] max-tablet:gap-5 max-mobile:grid-cols-1 max-mobile:gap-5">
                <PressReleaseCard imgSrc={pressRelease1} title={"YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction"} location={"India"} date={"06/11/2024"} descr={"YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers."}/>

                <PressReleaseCard imgSrc={pressRelease2} title={"YourBank Expands Branch Network with Opening of New Location in Chennai"} location={"India"} date={"12/11/2024"} descr={"YourBank is excited to announce the grand opening of our newest branch in Chennai. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community."}/>

                <PressReleaseCard imgSrc={pressRelease3} title={"YourBank Partners with Local Nonprofit to Support Financial Education Initiatives"} location={"India"} date={"24/12/2024"} descr={"YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers."}/>

                <PressReleaseCard imgSrc={pressRelease4} title={"YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility"} location={"India"} date={"28/12/2024"} descr={"YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers."}/>
            </div>
        </section>
    )
}