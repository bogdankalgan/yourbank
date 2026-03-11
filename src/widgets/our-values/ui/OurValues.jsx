import OurValuesCard from "@/widgets/our-values/ui/OurValuesCard.jsx";

export default function OurValues() {
    return (
        <section className="flex flex-col gap-80 max-tablet:gap-14 max-mobile:gap-12">
            <div className="flex flex-col gap-3.5">
                <h2 className="max-mobile:text-center">Our <span>Values</span></h2>
                <p className="text-grey-70 max-tablet:text-16 max-mobile:text-sm max-mobile:text-center">
                    At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.
                </p>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-80 max-tablet:gap-14 max-mobile:flex max-mobile:flex-col max-mobile:gap-12">
                <OurValuesCard title={"Integrity"} descr={"We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices."}/>

                <OurValuesCard title={"Customer Centricity"} descr={"Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations."}/>

                <OurValuesCard title={"Collaboration"} descr={"We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together."}/>

                <OurValuesCard title={"Innovation"} descr={"We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking."}/>
            </div>
        </section>
    )
}