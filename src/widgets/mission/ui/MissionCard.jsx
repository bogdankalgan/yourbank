export default function MissionCard({ title, descr, imgSrc, reversed }) {
    return (
        <div className={`${reversed ? "flex-row-reverse" : ""} flex items-center relative max-mobile:flex-col`}>
            <div className="relative w-[664px] h-[621px] max-tablet:w-[545px] max-tablet:h-[500px] max-mobile:w-full max-mobile:h-[329px] shrink-0 flex flex-col rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[20px] rounded-br-[20px] max-mobile:rounded-bl-none max-mobile:rounded-br-none overflow-clip border border-grey-15 pt-[60px] px-[60px] max-mobile:pt-5 max-mobile:px-5">
                <div
                    className="absolute inset-0 z-0 opacity-50 mix-blend-screen rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[20px] rounded-br-[20px] max-mobile:rounded-bl-none max-mobile:rounded-br-none"
                    style={{
                        backgroundImage: "radial-gradient(circle, rgba(202, 255, 51, 0.35) 1.5px, transparent 1.5px)",
                        backgroundSize: "22px 22px",
                    }}
                />

                <div
                    className="absolute inset-0 z-[1] pointer-events-none rounded-tl-[50px] rounded-tr-[50px] rounded-bl-[20px] rounded-br-[20px] max-mobile:rounded-bl-none max-mobile:rounded-br-none opacity-50 mix-blend-screen"
                    style={{
                        backgroundImage:
                            "linear-gradient(107deg, rgba(202, 255, 51, 0.05) 29%, rgba(202, 255, 51, 0) 28%), linear-gradient(267deg, rgb(28, 28, 28) 41%, rgba(28, 28, 28, 0) 100%)",
                    }}
                />

                <img src={imgSrc} alt={title} className="relative z-10 flex-1 min-h-0 w-full object-cover rounded-tl-[50px] rounded-tr-[50px]" />
            </div>

            <div className="flex flex-col gap-3.5 border-l border-green-60 pl-[50px] max-tablet:pl-10 max-mobile:border-l-0 max-mobile:border-t max-mobile:border-green-60 max-mobile:pl-0 max-mobile:pt-[30px] max-mobile:text-center max-mobile:items-center max-mobile:w-full">
                <h3 className="font-medium text-[38px] max-tablet:text-[32px] max-mobile:text-[26px]">{title}</h3>
                <p className="text-grey-70 max-tablet:text-base max-mobile:text-sm">{descr}</p>
            </div>
        </div>
    )
}
