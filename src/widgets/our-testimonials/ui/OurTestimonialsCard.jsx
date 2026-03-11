export default function OurTestimonialsCard({quote, author}) {
    return (
        <div className="shrink-0 w-1/3 max-mobile:w-full">
            <div className="text-center">
                <span className="text-7xl max-mobile:text-5xl bg-gradient-to-b from-green-60 to-transparent bg-clip-text text-transparent">❝</span>
            </div>

            <div className="flex flex-col items-center">
                <p className="text-center">{quote}</p>
                <p className="text-green-60 font-medium">{author}</p>
            </div>
        </div>
    )
}