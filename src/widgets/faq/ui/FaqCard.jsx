export default function FaqCard({title, descr}) {
    return (
        <div className="border border-grey-15 p-[50px] max-tablet:p-10 max-mobile:p-[30px] rounded-[14px] max-tablet:rounded-[10px] flex flex-col gap-[30px] max-tablet:gap-6 max-mobile:gap-5">
            <p>{title}</p>

            <div className="w-full h-px bg-grey-15"></div>

            <p>{descr}</p>
        </div>
    )
}