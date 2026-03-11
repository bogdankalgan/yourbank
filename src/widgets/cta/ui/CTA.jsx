import {Canvas} from "@react-three/fiber";
import DotsPlane from "@/shared/ui/DotsPlane.jsx";
import {ROUTES} from "@/shared/config/routes.js";
import {LinkButton} from "@/shared/ui";

export default function CTA() {
    return (
        <section className="px-48 max-tablet:px-[80px] max-mobile:px-4">
            <div className="bg-grey-11 border border-grey-15 rounded-2xl p-76 max-tablet:p-12 max-mobile:p-[30px] w-full relative">
                <div className={"w-[224px] h-[213px] absolute top-0 z-0 left-0"}>
                    <Canvas camera={{position: [0,0, 5],fov: 100}}>
                        <DotsPlane/>
                    </Canvas>
                </div>

                <div className="flex justify-between items-center max-mobile:flex-col max-mobile:gap-6 max-mobile:text-center">
                    <div className="flex flex-col gap-3.5 w-3/4 max-mobile:w-full">
                        <h2 className="text-40 max-mobile:text-2xl">Start your financial journey with <span>YourBank today!</span></h2>
                        <p className="text-grey-70">Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service</p>
                    </div>

                    <LinkButton to={ROUTES.SIGNUP} text={"Open Account"}/>
                </div>
            </div>
        </section>
    )
}