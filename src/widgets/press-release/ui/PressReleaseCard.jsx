export default function PressReleaseCard({ imgSrc, title, location, date, descr }) {
    return (
        <div className="bg-grey-11 border border-grey-15 rounded-tl-[50px] rounded-tr-[50px] rounded-br-[24px] rounded-bl-[24px] max-tablet:rounded-tl-[40px] max-tablet:rounded-tr-[40px] max-tablet:rounded-br-[16px] max-tablet:rounded-bl-[16px] p-[30px] max-tablet:p-6 max-mobile:p-5 flex flex-col gap-[50px] max-tablet:gap-10 max-mobile:gap-[30px]">
            <div className="h-[333px] max-tablet:h-[277px] max-mobile:h-[206px] rounded-tl-[40px] rounded-tr-[40px] rounded-br-[16px] rounded-bl-[16px] max-tablet:rounded-tl-[30px] max-tablet:rounded-tr-[30px] max-tablet:rounded-br-[12px] max-tablet:rounded-bl-[12px] overflow-hidden">
                <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
            </div>

            <div className="flex flex-col gap-6 max-tablet:px-6 max-mobile:px-0">
                <div className="flex flex-col gap-3.5 max-mobile:gap-2.5">
                    <h3 className="text-[24px] max-tablet:text-xl max-mobile:text-lg">{title}</h3>

                    <div className="flex items-center gap-1.5">
                        <div className="bg-grey-10 border border-grey-15 rounded-full py-2 px-4 max-tablet:py-1.5 max-tablet:px-3.5 max-mobile:px-3">
                            <p className="text-grey-70 font-light text-lg max-tablet:text-base max-mobile:text-sm">Location: {location}</p>
                        </div>
                        <div className="bg-grey-10 border border-grey-15 rounded-full py-2 px-4 max-tablet:py-1.5 max-tablet:px-3.5 max-mobile:px-3">
                            <p className="text-grey-70 font-light text-lg max-tablet:text-base max-mobile:text-sm">Date: {date}</p>
                        </div>
                    </div>
                </div>

                <p className="text-grey-70 font-light max-tablet:text-base max-mobile:text-sm">{descr}</p>
            </div>
        </div>
    )
}