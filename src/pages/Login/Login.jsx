import OurTestimonials from "@/widgets/our-testimonials/";
import LoginForm from "@/widgets/LoginForm/";

export default function Login() {
    return (
        <div className="flex flex-col gap-150 max-tablet:gap-120 max-mobile:gap-80">
            <LoginForm/>
            <OurTestimonials/>
        </div>
    )
}