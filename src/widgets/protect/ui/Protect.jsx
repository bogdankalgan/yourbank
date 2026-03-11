import {FeatureCard} from "@/shared/ui/"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus, faLayerGroup, faStar} from "@fortawesome/free-solid-svg-icons"
import {faAlipay} from "@fortawesome/free-brands-svg-icons"

export default function Protect() {
    return (
        <section className="flex flex-col gap-80 max-tablet:gap-14 max-mobile:gap-10">
            <div className="flex flex-col gap-3.5 max-mobile:text-center">
                <h2>How We <span>Protect You</span></h2>
                <p className="text-grey-70 max-tablet:text-base max-mobile:text-sm">At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times</p>
            </div>

            <div className="grid grid-cols-2 gap-[30px] max-tablet:gap-5 max-mobile:grid-cols-1 max-mobile:gap-5">
                <FeatureCard title={"Secure Online Banking Platform"} descr={"Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission."} icon={<FontAwesomeIcon icon={faPlus}/>} className="rounded-[20px] border border-grey-15 gap-6 max-tablet:gap-5 max-mobile:gap-[18px]" />

                <FeatureCard title={"Multi-Factor Authentication"} descr={"To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account."} icon={<FontAwesomeIcon icon={faLayerGroup}/>} className="rounded-[20px] border border-grey-15 gap-6 max-tablet:gap-5 max-mobile:gap-[18px]" />

                <FeatureCard title={"Fraud Monitoring"} descr={"We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind."} icon={<FontAwesomeIcon icon={faStar}/>} className="rounded-[20px] border border-grey-15 gap-6 max-tablet:gap-5 max-mobile:gap-[18px]" />

                <FeatureCard title={"Secure Mobile Banking"} descr={"Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected."} icon={<FontAwesomeIcon icon={faAlipay}/>} className="rounded-[20px] border border-grey-15 gap-6 max-tablet:gap-5 max-mobile:gap-[18px]" />
            </div>
        </section>
    )
}