import {Canvas} from "@react-three/fiber";
import {Dots} from "@/shared/ui";
import {LinkButton} from "@/shared/ui";
import HeroCard from "./HeroCard.jsx";
import {ROUTES} from "@/shared/config/routes.js";
import CurrencyConverter from "@/features/currency-converter";



export default function Hero() {

    return (
        <section className="h-fit relative pt-8 pr-72 pl-44 max-tablet:px-[80px] max-mobile:px-4 max-mobile:pt-0 overflow-x-clip">
            <div className="w-[759px] h-[610px] absolute top-[-592px] left-[-70px] max-mobile:hidden">
               <Canvas camera={{position: [-15.01, 4.01, -1.50], fov: 50}} gl={{alpha: true}} style={{background: 'transparent'}}>
                    <Dots/>
               </Canvas>
            </div>

            <div className="flex gap-120 max-tablet:gap-16 max-mobile:flex-col max-mobile:gap-20">
                <div className="flex flex-col items-start gap-12 max-mobile:gap-6 max-mobile:items-center max-mobile:text-center">
                    <div className="flex flex-col gap-3.5">
                        <h2>Welcome to YourBank Empowering Your <span>Financial Journey</span></h2>

                        <p>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
                    </div>

                    <LinkButton to={ROUTES.SIGNUP} text="Open Account"/>
                </div>

                <div className="relative">
                    <HeroCard>
                        <CurrencyConverter/>
                    </HeroCard>
                </div>
            </div>
        </section>
    )
}
