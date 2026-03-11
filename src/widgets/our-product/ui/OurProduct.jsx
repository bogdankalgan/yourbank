import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSuitcase, faCloudArrowDown, faMoneyBillWave} from "@fortawesome/free-solid-svg-icons";
import OurProductCard from "@/widgets/our-product/ui/OurProductCard.jsx";
import {TabSwitcher} from "@/shared/ui";

export default function OurProduct() {
    const [activeTab, setActiveTab] = useState("individuals")

    const tabs = [
        {key: "individuals", label: "For Individuals"},
        {key: "businesses", label: "For Businesses"}
    ]

    return (
        <section className="px-40 max-tablet:px-[80px] max-mobile:px-4 flex flex-col gap-24 max-mobile:gap-[60px]">
            <div className="flex justify-between max-mobile:flex-col max-mobile:gap-5 max-mobile:items-center max-mobile:text-center">
                <div className="flex flex-col gap-3.5 max-mobile:gap-2.5">
                    <h2>Our <span>Products</span></h2>
                    <p className="text-grey-70">Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your <br/> unique financial needs and aspirations</p>
                </div>

                <TabSwitcher tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab}/>
            </div>

            <div>
                {activeTab === "individuals" ? (
                    <div className="grid grid-cols-3 max-mobile:grid-cols-1 gap-6 max-mobile:gap-[30px] max-mobile:px-2.5">
                        <OurProductCard icon={<FontAwesomeIcon icon={faSuitcase}/>} title={"Checking Accounts"} descr={"Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."}/>

                        <OurProductCard icon={<FontAwesomeIcon icon={faCloudArrowDown} />} title={"Savings Accounts"} descr={"Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."}/>

                        <OurProductCard icon={<FontAwesomeIcon icon={faMoneyBillWave} />} title={"Loans and Mortgages"} descr={"Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."}/>
                    </div>
                ) : (
                    <div className="grid grid-cols-3 max-mobile:grid-cols-1 gap-6 max-mobile:gap-[30px] max-mobile:px-2.5">
                        <OurProductCard icon={<FontAwesomeIcon icon={faMoneyBillWave} />} title={"Loans and Mortgages"} descr={"Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need."}/>

                        <OurProductCard icon={<FontAwesomeIcon icon={faCloudArrowDown} />} title={"Savings Accounts"} descr={"Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you."}/>

                        <OurProductCard icon={<FontAwesomeIcon icon={faSuitcase}/>} title={"Checking Accounts"} descr={"Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access."}/>
                    </div>
                )}
            </div>
        </section>
    )
}
