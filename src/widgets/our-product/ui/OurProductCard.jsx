import GradientIcon from "@/shared/ui/GradientIcon/GradientIcon.jsx";

export default function OurProductCard({icon, title, descr}) {
    return (
        <div className="flex flex-col items-center border-r border-grey-15 max-mobile:border-r-0 max-mobile:border-b max-mobile:pb-6 pr-6 pl-6 max-mobile:px-0">
            <div className="mb-8 max-mobile:mb-5">
                <GradientIcon icon={icon}/>
            </div>

            <div>
                <p className="text-center justify-start text-white text-2xl max-mobile:text-xl font-normal leading-9 mb-5 max-mobile:mb-3">{title}</p>
                <div className="self-stretch text-center justify-start text-grey-70 text-lg font-light leading-7">{descr}</div>
            </div>
        </div>
    )
}
