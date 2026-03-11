import {useState} from "react";
import {TabSwitcher} from "@/shared/ui/";
import OurTestimonialsSlider from "@/widgets/our-testimonials/ui/OurTestimonialsSlider.jsx";

export default function OurTestimonials() {
    const [activeTab, setActiveTab] = useState("individuals")

    const tabs = [
        {key: "individuals", label: "For Individuals"},
        {key: "businesses", label: "For Businesses"}
    ]

    const individuals = [
        {quote: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.", author: "John D"},
        {quote: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.", author: "Sara T"},
        {quote: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.", author: "Emily G"},

        {quote: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.", author: "John D"},
        {quote: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.", author: "Sara T"},
        {quote: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.", author: "Emily G"},
    ]

    const businesses = [
        {quote: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.", author: "Emily G"},
        {quote: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.", author: "Sara T"},
        {quote: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.", author: "John D"},

        {quote: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.", author: "Emily G"},
        {quote: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.", author: "Sara T"},
        {quote: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.", author: "John D"},

        {quote: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.", author: "John D"},
        {quote: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.", author: "Sara T"},
        {quote: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.", author: "Emily G"},
    ]

    return (
        <section className="px-48 max-tablet:px-[80px] max-mobile:px-4 flex flex-col gap-24 max-tablet:gap-16 max-mobile:gap-10">
            <div className="flex items-end justify-between max-mobile:flex-col max-mobile:items-center max-mobile:text-center max-mobile:gap-5">
                <div className="flex flex-col gap-3.5 max-mobile:gap-2.5 w-5/8 max-mobile:w-full">
                    <h2>Our <span>Testimonials</span></h2>
                    <p className="text-grey-70">Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey</p>
                </div>

                <TabSwitcher tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}/>
            </div>

            <div>
                {activeTab === "individuals" ? (
                    <OurTestimonialsSlider testimonials={individuals}/>
                ) : (
                    <OurTestimonialsSlider testimonials={businesses}/>
                )}
            </div>
        </section>
    )
}