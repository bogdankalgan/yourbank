export default function Input({placeholder, type, name, value, onChange, error}) {
    return (
        <div className="flex-1 min-w-0">
            <input type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} className={`w-full placeholder-grey-35 placeholder:font-light text-lg text-green-60 p-6 bg-grey-10 border rounded-full focus:outline-none max-tablet:p-5 max-tablet:text-16 max-mobile:p-4 ${error ? "border-red-600" : "border-grey-15"}`}/>
        </div>
    )
}