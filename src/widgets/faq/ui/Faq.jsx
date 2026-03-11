import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import FaqCard from "@/widgets/faq/ui/FaqCard.jsx"

const faqData = [
    {
        title: "How do I open an account with YourBank?",
        descr: 'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
    },
    {
        title: "What documents do I need to provide to apply for a loan?",
        descr: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.",
    },
    {
        title: "How can I access my accounts online?",
        descr: "Accessing your accounts online is simple and secure. Visit our website and click on the 'Login' button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the 'Enroll Now' button and follow the registration process. If you need assistance, our customer support team is available to guide you.",
    },
    {
        title: "Are my transactions and personal information secure?",
        descr: "At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.",
    },
    {
        title: "How do I open an account with YourBank?",
        descr: 'Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.',
    },
    {
        title: "What documents do I need to provide to apply for a loan?",
        descr: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.",
    },
    {
        title: "How can I access my accounts online?",
        descr: "Accessing your accounts online is simple and secure. Visit our website and click on the 'Login' button. Enter your username and password to access your accounts. If you haven't registered for online banking, click on the 'Enroll Now' button and follow the registration process. If you need assistance, our customer support team is available to guide you.",
    },
    {
        title: "Are my transactions and personal information secure?",
        descr: "At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.",
    },
]

export default function Faq() {
    const [visibleCount, setVisibleCount] = useState(4)
    const visibleFaqs = faqData.slice(0, visibleCount)
    const allVisible = visibleCount >= faqData.length

    return (
        <section>
            <div className="flex flex-col gap-80 max-tablet:gap-[60px] max-mobile:gap-[50px]">
                <div className="flex flex-col gap-3.5 max-tablet:gap-2.5 max-mobile:gap-2.5 max-mobile:text-center">
                    <h2>
                        <span>Frequently</span> Asked Questions
                    </h2>
                    <p className="text-grey-70">
                        Still you have any questions? Contact our Team via{" "}
                        <a href="mailto:support@yourbank.com" className="text-green-60">
                            support@yourbank.com
                        </a>
                    </p>
                </div>

                <div>
                    <div className="relative">
                        <div className="grid grid-cols-2 max-mobile:grid-cols-1 gap-[30px] max-tablet:gap-5 max-mobile:gap-5">
                            {visibleFaqs.map((faq, index) => (
                                <FaqCard key={index} title={faq.title} descr={faq.descr} />
                            ))}
                        </div>

                        {!allVisible && (
                            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-grey-10 to-transparent" />
                        )}
                    </div>

                    {!allVisible && (
                        <div className="flex justify-center">
                            <button
                                type="button"
                                className="bg-grey-11 border border-grey-15 rounded-full text-white px-6 py-[18px] max-tablet:px-5 max-tablet:py-3.5 text-lg max-tablet:text-sm transition cursor-pointer duration-300 hover:text-green-60 active:text-white"
                                onClick={() => setVisibleCount((prev) => prev + 4)}
                            >
                                Load All FAQ&apos;s <FontAwesomeIcon icon={faChevronDown} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
