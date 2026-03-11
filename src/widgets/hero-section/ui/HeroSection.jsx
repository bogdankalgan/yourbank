import {Canvas} from "@react-three/fiber";
import DotsPlane from "@/shared/ui/DotsPlane.jsx";

export default function HeroSection({title, descr, imgSrc}) {
    return (
        <section className="relative flex bg-grey-11 py-[50px] pl-[50px] pr-[310px] max-tablet:py-10 max-tablet:pl-10 max-tablet:pr-[214px] max-mobile:p-3.5 rounded-[20px] justify-between items-start max-mobile:flex-col">
            <div className="absolute w-[505px] h-[480px] top-0 right-[-100px] z-0 max-tablet:w-[334px] max-tablet:h-[317px] max-mobile:w-[199px] max-mobile:h-[189px]">
                <Canvas camera={{position: [0,0,5], fov: 100}}>
                    <DotsPlane/>
                </Canvas>
            </div>

            <div className="mr-[-260px] max-tablet:mr-[-174px] max-mobile:mr-0 max-mobile:mt-[-30px] relative z-20 bg-grey-10 p-[80px] max-tablet:p-[60px] max-mobile:p-6 rounded-tl-[20px] rounded-tr-none rounded-br-[80px] max-tablet:rounded-br-[60px] rounded-bl-[20px] max-mobile:rounded-[20px] w-3/5 max-mobile:w-full flex flex-col gap-[23px] max-tablet:gap-5 max-mobile:gap-4">
                <h2 className="text-6xl max-tablet:text-5xl max-mobile:text-3xl max-mobile:text-center">{title}</h2>

                <p className="max-tablet:text-16 text-grey-70 max-mobile:text-sm max-mobile:text-center max-mobile:text-sm">{descr}</p>
            </div>

            <div className="z-10 flex-1 mr-[-260px] max-tablet:mr-[-174px] max-mobile:mr-0 max-mobile:order-first max-mobile:w-full">
                <img src={imgSrc} alt={title} className="w-full h-[716px] max-tablet:h-[568px] max-mobile:h-[253px] object-cover rounded-2xl" />
            </div>
        </section>
    )
}