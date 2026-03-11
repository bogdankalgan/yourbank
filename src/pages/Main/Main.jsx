import Hero from "@/widgets/hero";
import OurProduct from "@/widgets/our-product";
import UseCases from "@/widgets/use-cases";
import OurFeatures from "@/widgets/our-features";
import Faq from "@/widgets/faq";
import OurTestimonials from "@/widgets/our-testimonials";
import CTA from "@/widgets/cta";

export default function Main() {
    return (
        <>
            <Hero/>
            <OurProduct/>
            <UseCases/>
            <OurFeatures/>
            <div className="px-48 max-tablet:px-[80px] max-mobile:px-4">
                <Faq/>
            </div>
            <OurTestimonials/>
            <CTA/>
        </>
    )
}