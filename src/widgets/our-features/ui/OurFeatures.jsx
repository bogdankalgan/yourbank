import {useState} from "react";
import OurFeaturesCard from "@/widgets/our-features/ui/OurFeaturesCard.jsx";

export default function OurFeatures() {
    const [activeTab, setActiveTab] = useState("onlineBanking")

    const tabButtonsStyles = (tab) =>  `${activeTab === tab ? "text-green-60 bg-grey-10" : "text-white"} px-6 py-4 rounded-full border border-grey-15 cursor-pointer transition duration-300 hover:text-green-60 whitespace-nowrap`

    const tabsData = {
        "onlineBanking": [
            {title: "24/7 Account Access", descr: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease."},
            {title: "Mobile Banking App", descr: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet."},
            {title: "Secure Transactions", descr: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information."},
            {title: "Bill Pay and Transfers", descr: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks."},
        ],
        "financialTools": [
            {title: "24/7 Account Access", descr: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease."},
            {title: "Bill Pay and Transfers", descr: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks."},
            {title: "Secure Transactions", descr: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information."},
            {title: "Mobile Banking App", descr: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet."},
        ],
        "customerSupport": [
            {title: "Bill Pay and Transfers", descr: "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks."},
            {title: "Secure Transactions", descr: "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information."},
            {title: "Mobile Banking App", descr: "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet."},
            {title: "24/7 Account Access", descr: "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease."},
        ]
    }

    return (
        <section className="px-40 max-tablet:px-[80px] max-mobile:px-4 flex flex-col gap-3.5 max-mobile:gap-[50px]">
            <div className="flex flex-col gap-3.5 max-mobile:gap-2.5 max-mobile:text-center">
                <h2>Our <span>Features</span></h2>
                <p className="text-grey-70">Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience</p>
            </div>

            <div className="flex gap-7 items-start max-mobile:flex-col max-mobile:gap-5">
                <div className="flex flex-col max-mobile:flex-row gap-6 max-mobile:gap-5 bg-grey-11 rounded-xl p-12 max-tablet:p-6 max-mobile:p-5 text-white text-lg max-mobile:text-sm max-mobile:w-full max-mobile:overflow-x-auto">
                    <button type="button" onClick={() => setActiveTab("onlineBanking")} className={tabButtonsStyles("onlineBanking")}>Online Banking</button>
                    <button type="button" onClick={() => setActiveTab("financialTools")} className={tabButtonsStyles("financialTools")}>Financial Tools</button>
                    <button type="button" onClick={() => setActiveTab("customerSupport")} className={tabButtonsStyles("customerSupport")}>Customer Support</button>
                </div>

                <div className="grid grid-cols-2 grid-rows-2 max-mobile:grid-cols-1 gap-7 max-mobile:gap-5">
                    {tabsData[activeTab].map((card) => (
                        <OurFeaturesCard key={card.title} title={card.title} descr={card.descr}/>
                    ))}
                </div>
            </div>
        </section>
    )
}