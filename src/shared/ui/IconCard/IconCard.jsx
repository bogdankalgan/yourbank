import GradientIcon from "@/shared/ui/GradientIcon/GradientIcon.jsx";

export default function IconCard({icon, text}) {
    return (
        <div className="flex items-center gap-4 max-mobile:gap-3.5 flex-col bg-grey-10 border border-grey-15 rounded-2xl p-7 max-mobile:px-3.5 max-mobile:py-5 relative z-10">
            <GradientIcon icon={icon}/>
            <p className="text-center">{text}</p>
        </div>
    )
}
