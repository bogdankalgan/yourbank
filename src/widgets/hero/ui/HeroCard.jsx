import {useState, useEffect, useRef, useCallback} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDollarSign, faEuroSign, faBitcoinSign} from "@fortawesome/free-solid-svg-icons";
import {faEthereum} from "@fortawesome/free-brands-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import heroCardIcon from "@/shared/assets/icons/TransactionBlock/TransactionBlockIcon.svg"
import {Canvas} from "@react-three/fiber";
import {Arrow} from "@/shared/ui";

const VISIBLE_COUNT = 3;
const CYCLE_MS = 3000;
const GAP = 8;

const names = [
    "Subhaan Fergun",
    "Tess Bruce" ,
    "Kamil Hicks" ,
    "Charis Obrien" ,
    "Zach Durham" ,
    "Annabel Bartlt",
    "Aya Lynch" ,
    "Aliza Reed" ,
    "Hamish Nguyen" ,
    "Rebecca Baker" ,
    "Jude Wilson"
]

const moneys = [
    6160, 7431, 4283, 2936, 6446, 7706, 2126, 5061, 8141, 4560, 4937, 7235, 6391
]

let nextTransactionId = 0

function getRandomTransaction() {
    const id = ++nextTransactionId
    const name = names[Math.floor(Math.random() * names.length)]
    const money = moneys[Math.floor(Math.random() * moneys.length)]
    return {id, name, money}
}

function TransactionBlock({name, money}) {
    return (
        <div className="flex items-center gap-2 border border-grey-15 bg-grey-11 rounded-xl px-20 max-mobile:px-3 py-3 max-mobile:py-2 w-445 max-mobile:w-full max-mobile:rounded-md">
            <img src={heroCardIcon} alt="hero card icon"/>
            <div className="w-full">
                <h4>Transaction</h4>
                <div className="flex items-center justify-between w-full">
                    <p className="font-normal">{name}</p>
                    <p className="whitespace-nowrap font-normal">{`-$${money}`}</p>
                </div>
            </div>
        </div>
    )
}

function TransactionList() {
    const [items, setItems] = useState(() =>
        Array.from({length: VISIBLE_COUNT + 1}, getRandomTransaction)
    );
    const [shifting, setShifting] = useState(false);
    const firstCardRef = useRef(null);
    const [slotHeight, setSlotHeight] = useState(0);

    useEffect(() => {
        if (firstCardRef.current) {
            setSlotHeight(firstCardRef.current.offsetHeight + GAP);
        }
    }, []);

    useEffect(() => {
        if (!slotHeight) return;
        const id = setInterval(() => setShifting(true), CYCLE_MS);
        return () => clearInterval(id);
    }, [slotHeight]);

    const handleTransitionEnd = useCallback((e) => {
        if (e.propertyName !== "transform") return;
        setShifting(false);
        setItems(prev => [...prev.slice(1), getRandomTransaction()]);
    }, []);

    return (
        <div className="overflow-hidden" style={{height: slotHeight ? slotHeight * VISIBLE_COUNT - GAP : "auto"}}>
            <div
                className="flex flex-col gap-2"
                style={{
                    transform: shifting ? `translateY(-${slotHeight}px)` : "translateY(0)",
                    transition: shifting ? "transform 0.7s ease-in-out" : "none",
                }}
                onTransitionEnd={handleTransitionEnd}
            >
                {items.map((t, i) => {
                    const visualIndex = shifting ? i - 1 : i;
                    const opacity = visualIndex < 0 ? 0 : 1 - visualIndex * 0.3;

                    return (
                        <div
                            key={t.id}
                            ref={i === 0 ? firstCardRef : null}
                            style={{
                                opacity,
                                zIndex: items.length - i,
                                transition: "opacity 0.7s ease-in-out",
                            }}
                        >
                            <TransactionBlock name={t.name} money={t.money}/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function Icon({icon}) {
    return (
        <div className="bg-grey-15 text-green-60 rounded-full text-sm px-3 py-2 max-mobile:px-1.5 max-mobile:py-1 max-mobile:text-[10px]">
            <FontAwesomeIcon icon={icon}/>
        </div>
    )
}

export default function HeroCard({children}) {

    return (
        <div className="bg-grey-10 border-gradient-green rounded-xl p-7 flex flex-col gap-5 relative max-mobile:p-5 max-mobile:rounded-md max-mobile:gap-4">
            <div className="absolute right-[-245px] top-[10px] z-[-1] w-[417px] h-[382px] max-tablet:hidden">
                <Canvas camera={{position: [0, 0, 20], fov: 90}} gl={{alpha: true}} style={{background: "transparent"}}>
                    <Arrow scale={0.4} position={[-6.8, 17, 0]} speed={0.2} direction={[4, 4, 0]} />
                    <Arrow scale={2} position={[-5.5, 9.6, 0]} speed={0.15} direction={[6, 6, 0]} />
                    <Arrow scale={0.6} position={[0, 7.8, 0]} speed={0.25} direction={[3, 3, 0]} />
                    <Arrow scale={1.4} position={[-10, -1.9, 0]} speed={0.18} direction={[5, 5, 0]} />
                    <Arrow scale={1} position={[-2.7, -1.2, 0]} speed={0.2} direction={[4, 4, 0]} />
                    <Arrow scale={0.6} position={[5.9, 2.8, 0]} speed={0.22} direction={[3, 3, 0]} />
                </Canvas>
            </div>

            <div className="flex items-center bg-green-btn w-fit rounded-lg px-4 py-3 gap-4 absolute top-[-60px] left-[-60px] max-mobile:top-[-26px] max-mobile:left-[-10px] max-mobile:px-2.5 max-mobile:py-2 max-mobile:gap-1.5 max-mobile:rounded-md">
                <div className="bg-green-60 flex items-center justify-center p-2 rounded-full max-mobile:p-1.5">
                    <FontAwesomeIcon icon={faPlus} />
                </div>

                <div>
                    <p className="max-mobile:text-[10px]">+500</p>
                    <p className="max-mobile:text-[8px]">Monthly income</p>
                </div>
            </div>

            <div>
                <h3 className="whitespace-nowrap mb-4">Your Transactions</h3>
                <TransactionList/>
            </div>

            <div className="flex flex-col gap-5 px-4 pt-4 pb-6">
                {/*Money exchange block and exchange button*/}
                <h3>Money Exchange</h3>
                {children}
            </div>

            <div className="flex items-center gap-2.5 bg-green-btn w-fit rounded-full py-2 pr-2 pl-5 absolute bottom-[-81px] right-[-52px] max-mobile:bottom-[-52px] max-mobile:right-[-16px] max-mobile:py-1.5 max-mobile:pr-1.5 max-mobile:pl-3 max-mobile:gap-1.5">
                <p className="text-15 max-mobile:text-[9px]">Supported Currency</p>
                <div className="bg-grey-10 border-grey-15 rounded-full flex gap-2 p-2 max-mobile:gap-1 max-mobile:p-1.5">
                    <Icon icon={faDollarSign}/>
                    <Icon icon={faEuroSign}/>
                    <Icon icon={faBitcoinSign}/>
                    <Icon icon={faEthereum}/>
                </div>
            </div>
        </div>
    )
}