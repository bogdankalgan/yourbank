import {GradientIcon, Noise} from "@/shared/ui/"
import {Canvas} from "@react-three/fiber"

export default function FeatureCard({ icon, title, descr, className = "" }) {
    return (
        <div className={`p-[50px] bg-linear-[45deg] from-0 from-grey-11/41 to-50% to-grey-11 relative flex flex-col max-tablet:p-10 max-mobile:p-6 overflow-hidden ${className}`}>
            <div className="bg-linear-[-45deg] from-green-60/1 from-70% to-green-60/10 to-100% absolute inset-0 pointer-events-none" />

            <div className="w-1/2 absolute inset-y-0 left-0 pointer-events-none overflow-hidden">
                <Canvas camera={{ zoom: 1, position: [0, 0, 1] }}>
                    <Noise />
                </Canvas>
            </div>

            <div className="flex gap-5 items-center max-tablet:gap-3.5 max-mobile:gap-2.5 relative z-1">
                <GradientIcon icon={icon} />
                <h3 className="text-2xl max-tablet:text-xl max-mobile:text-lg">{title}</h3>
            </div>

            <p className="text-lg text-grey-70 font-light max-tablet:text-base max-mobile:text-sm relative z-1">{descr}</p>
        </div>
    )
}