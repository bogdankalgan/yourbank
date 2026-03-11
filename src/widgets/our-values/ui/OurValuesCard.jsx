export default function OurValuesCard({title, descr}) {
    return (
        <div className="flex flex-col gap-30 border-l-2 border-green-60 pl-6 max-tablet:gap-5">
            <h3 className="text-58 text-grey-30 font-medium leading-[150%] max-tablet:text-40 max-mobile:text-3xl">{title}</h3>
            <p className="text-grey-70 max-tablet:text-16 max-mobile:text-sm">{descr}</p>
        </div>
    )
}