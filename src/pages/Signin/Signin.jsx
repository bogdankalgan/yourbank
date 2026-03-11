import OurTestimonials from "@/widgets/our-testimonials/index.js";
import SigninForm from "@/widgets/SigninForm/index.js";

export default function Signin() {
    return (
        <div className="flex flex-col gap-150 max-tablet:gap-120 max-mobile:gap-80">
            <SigninForm/>
            <OurTestimonials/>
        </div>
    )
}