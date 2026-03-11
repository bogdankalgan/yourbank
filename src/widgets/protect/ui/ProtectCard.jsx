import {Canvas} from "@react-three/fiber";
import {GradientIcon} from "@/shared/ui";
import {Noise} from "@/shared/ui/";

export default function ProtectCard({title, descr, icon}) {
    return (
        <div className="benefit-card-border bg-linear-[45deg] from-0 from-grey-11/41 to-50$ to-grey-11 p-12 rounded-tl-[50px] rounded-tr-2xl rounded-br-[50px] rounded-bl-2xl flex flex-col gap-7 relative max-tablet:gap-6 max-tablet:p-10">
            <div className="bg-linear-[-45deg] from-green-60/1 from-70% to-green-60/10 to-100% absolute w-full h-full top-0 left-0 rounded-tl-[50px] rounded-tr-2xl rounded-br-[50px] rounded-bl-2xl pointer-events-none"></div>

            <div className="w-1/2 absolute inset-y-0 left-0 pointer-events-none overflow-hidden rounded-tl-[50px] rounded-bl-[20px]">
                <Canvas camera={{ zoom: 1, position: [0, 0, 1] }}>
                    <Noise />
                </Canvas>
            </div>

            <div className="flex items-center gap-5">
                <div>
                    <GradientIcon icon={icon}/>
                </div>
                <h3 className="text-2xl max-tablet:text-xl max-mobile:text-lg">{title}</h3>
            </div>

            <p className="text-grey-70 max-tablet:text-16 max-mobile:text-sm">{descr}</p>
        </div>
    )
}