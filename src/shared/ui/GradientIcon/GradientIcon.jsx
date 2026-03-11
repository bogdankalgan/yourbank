export default function GradientIcon({icon}) {
    return (
        <div className="p-3 rounded-full bg-grey-10 gradient-our-product-card" style={{"--gradient-start": "-800%"}}>
            <div className="text-green-60 p-5 rounded-full gradient-our-product-card gradient-card-border">
                {icon}
            </div>
        </div>
    )
}
