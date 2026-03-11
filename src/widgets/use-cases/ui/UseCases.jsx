import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHandHoldingDollar,faLeaf, faHouse, faBook, faIndustry, faMoneyBill1Wave, faCommentDollar, faChartColumn} from "@fortawesome/free-solid-svg-icons";
import UseCaseSection from "@/widgets/use-cases/ui/UseCaseSection.jsx";

export default function UseCases() {
    const individualData = {
        title: "For Individuals",
        description: "For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers",
        cards: [
            {icon: <FontAwesomeIcon icon={faHandHoldingDollar}/>, text: "Managing Personal Finances"},
            {icon: <FontAwesomeIcon icon={faLeaf}/>, text: "Saving for the Future"},
            {icon: <FontAwesomeIcon icon={faHouse}/>, text: "Homeownership"},
            {icon: <FontAwesomeIcon icon={faBook}/>, text: "Education Funding"},
        ],
        stats: [
            {percent: 78, text: "Secure Retirement Planning"},
            {percent: 63, text: "Manageable Debt Consolidation"},
            {percent: 91, text: "Reducing financial burdens"},
        ]
    }

    const businessData = {
         title: "For Business",
        description: " For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them",
        cards: [
            {icon: <FontAwesomeIcon icon={faIndustry}/>, text: "Startups and Entrepreneurs"},
            {icon: <FontAwesomeIcon icon={faMoneyBill1Wave}/>, text: "Cash Flow Management"},
            {icon: <FontAwesomeIcon icon={faChartColumn}/>, text: "Business Expansion"},
            {icon: <FontAwesomeIcon icon={faCommentDollar}/>, text: "Payment Solutions"},
        ],
        stats: [
            {percent: 65, text: "Cash Flow Management"},
            {percent: 70, text: "Drive Business Expansion"},
            {percent: 55, text: "Streamline payroll processing"},
        ]
    }

    return (
        <section className="px-40 max-tablet:px-[80px] max-mobile:px-4 flex flex-col gap-80 max-tablet:gap-16 max-mobile:gap-[60px]">
            <div className="flex flex-col gap-3.5 max-mobile:gap-2.5 max-mobile:text-center">
                <h2><span>Use Cases</span></h2>
                <p className="text-grey-70">At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
            </div>

            <div className="flex flex-col gap-16 max-mobile:gap-10">
                {/*For individuals*/}
                <UseCaseSection data={individualData}/>

                {/*For businesses*/}
                <UseCaseSection data={businessData} reversed/>
            </div>
        </section>
    )
}