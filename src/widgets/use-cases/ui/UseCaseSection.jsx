import {NavLink} from "react-router-dom";
import {Canvas} from "@react-three/fiber";
import IconCard from "@/shared/ui/IconCard/";
import StatItem from "@/shared/ui/StatItem/";
import DotsPlane from "@/shared/ui/DotsPlane.jsx";
import {ROUTES} from "@/shared/config/routes.js";

export default function UseCaseSection({reversed, data}) {
    const {title, description, cards, stats} = data

    return (
        <div className={`relative flex gap-24 max-tablet:gap-12 max-mobile:flex-col max-mobile:gap-[30px] ${reversed ? "flex-row-reverse" : "flex-row"}`}>
            <div className="grid grid-cols-2 bg-grey-11 p-12 max-tablet:p-6 max-mobile:p-5 gap-5 max-mobile:gap-2.5 justify-center relative rounded-[20px]">
                <div className={`w-[224px] h-[213px] absolute top-0 z-0 ${reversed ? "right-0" : "left-0"}`}>
                    <Canvas camera={{position: [0,0, 5],fov: 100}}>
                        <DotsPlane/>
                    </Canvas>
                </div>
                {cards.map((c) => (
                    <IconCard key={c.text} text={c.text} icon={c.icon}/>
                ))}
            </div>

            <div className="flex flex-col gap-16 max-tablet:gap-8 max-mobile:gap-[50px] w-1/2 max-mobile:w-full max-mobile:text-center max-mobile:items-center">
                <div className="flex flex-col gap-3.5 max-mobile:gap-2.5">
                    <h3 className="text-3xl max-mobile:text-xl">{title}</h3>

                    <p className="text-grey-70">{description}</p>
                </div>

                <div className="flex gap-24 max-tablet:gap-10 max-mobile:flex-col max-mobile:gap-0 max-mobile:w-full max-mobile:divide-y max-mobile:divide-grey-15 max-mobile:px-[50px]">
                    {stats.map((s) => (
                        <div key={s.percent} className="max-mobile:py-4">
                            <StatItem text={s.text} percent={s.percent}/>
                        </div>
                    ))}
                </div>

                <NavLink to={ROUTES.ABOUT} className="bg-grey-11 border border-grey-15 w-fit px-6 py-4 max-mobile:px-5 max-mobile:py-3.5 rounded-full text-white text-lg max-mobile:text-sm leading-[150%] transition duration-300 hover:text-green-60 active:text-white">Learn More</NavLink>
            </div>
        </div>
    )
}