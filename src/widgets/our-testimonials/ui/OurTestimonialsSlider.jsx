import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import OurTestimonialsCard from "@/widgets/our-testimonials/ui/OurTestimonialsCard.jsx";

function ArrowButton({icon, onClick}) {
    return (
        <button type="button" onClick={() => onClick()} className="bg-grey-11 border border-grey-15 rounded-full p-3.5 text-green-60 text-xl cursor-pointer transition duration-300 hover:text-white active:text-green-60 z-10">
            {icon}
        </button>
    )
}

export default function OurTestimonialsSlider({testimonials = []}) {
    const [activeCard, setActiveCard] = useState(0)

    const handleNext = () => {
        setActiveCard((prev) => (prev + 1) % testimonials.length)
    }

    const handlePrev = () => {
        setActiveCard((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div className="[--slide-size:33.33%] max-mobile:[--slide-size:100%]">
            <div className="flex items-center gap-12 relative">
                <div className="max-mobile:hidden">
                    <ArrowButton onClick={handlePrev} icon={<FontAwesomeIcon icon={faArrowLeft}/>}/>
                </div>

                <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-grey-10 to-transparent pointer-events-none z-0 max-mobile:hidden" />
                <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-grey-10 to-transparent pointer-events-none z-0 max-mobile:hidden" />

                <div className="overflow-hidden">
                    <div
                        className="flex gap-80 max-mobile:gap-0 transition duration-500 ease-in-out"
                        style={{ transform: `translateX(calc(-${activeCard} * var(--slide-size)))` }}
                    >
                        {testimonials.map((card, key) => (
                            <OurTestimonialsCard quote={card.quote} author={card.author} key={key} />
                        ))}
                    </div>
                </div>

                <div className="max-mobile:hidden">
                    <ArrowButton onClick={handleNext} icon={<FontAwesomeIcon icon={faArrowRight}/>}/>
                </div>
            </div>

            <div className="hidden max-mobile:flex justify-center gap-5 mt-[30px]">
                <ArrowButton onClick={handlePrev} icon={<FontAwesomeIcon icon={faArrowLeft}/>}/>
                <ArrowButton onClick={handleNext} icon={<FontAwesomeIcon icon={faArrowRight}/>}/>
            </div>
        </div>
    )
}
