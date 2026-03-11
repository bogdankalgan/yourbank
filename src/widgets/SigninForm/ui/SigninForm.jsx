import {useState} from "react";
import {Canvas} from "@react-three/fiber";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faApple, faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons";
import DotsPlane from "@/shared/ui/DotsPlane.jsx";
import {DiamondPattern, GradientIcon} from "@/shared/ui";
import Input from "@/shared/ui/Input";
import {signUp, signInWithOAuth} from "@/features/auth/index.js";
import {ROUTES} from "@/shared/config/routes.js";


export default function SigninForm() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const validate = () => {
        const newErrors ={}
        if(!formData.firstName) newErrors.firstName = "Required"
        if(!formData.lastName) newErrors.lastName = "Required"
        if(!formData.email) newErrors.email = "Required"
        if(!formData.password) newErrors.password = "Required"

        return Object.keys(newErrors).length > 0 ? newErrors : null
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
        setErrors({...errors, [e.target.name]: ""})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = validate()
        if(validationErrors) {
            setErrors(validationErrors)
            return
        }
        setIsSubmitting(true)
        const { error } = await signUp(formData)
        if(error) {
            setErrors({general: error.message})
        } else {
            setIsSuccess(true)
        }
        setIsSubmitting(false)
    }

    return (
        <div>
            {isSuccess ? (
                <div className="flex items-center justify-center">
                    <h2>Check your <span>Email</span> please</h2>
                </div>
            ) : (
                <div className="flex justify-center px-4">
            <div
                className="flex flex-col gap-80 relative px-150 py-100 border border-grey-15 rounded-[20px]
                    w-full max-w-[1326px] max-tablet:max-w-[1064px]
                    max-tablet:px-[200px] max-tablet:py-80 max-tablet:gap-[60px] max-tablet:rounded-2xl
                    max-mobile:p-[30px] max-mobile:gap-10 max-mobile:rounded-2xl">
                <div
                    className="w-[342px] h-[325px] absolute top-0 right-[-1px] z-[1]
                        max-tablet:w-[256px] max-tablet:h-[243px]
                        max-mobile:w-[167px] max-mobile:h-[159px]">
                    <Canvas>
                        <DotsPlane />
                    </Canvas>
                </div>

                <div className="absolute inset-0 rounded-[20px] overflow-hidden z-0 max-tablet:rounded-2xl">
                    <Canvas camera={{ position: [0, 0, 1] }}>
                        <DiamondPattern />
                    </Canvas>
                </div>

                <div className="text-center relative z-10 flex flex-col gap-5 max-tablet:gap-4 max-mobile:gap-2.5">
                    <h2>
                        <span>Sign Up</span>
                    </h2>
                    <p className="text-grey-75 max-tablet:text-16 max-mobile:text-sm">
                        Join our community today! Create an account to unlock exclusive features and personalized experiences.
                    </p>
                </div>

                <form className="flex flex-col gap-10 relative z-10 max-tablet:gap-[30px] max-mobile:gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-[30px] max-tablet:gap-6 max-mobile:gap-5">
                        <div className="flex gap-[30px] max-tablet:gap-6 max-mobile:flex-col max-mobile:gap-5">
                            <Input type="text" placeholder="Enter First Name" name="firstName" value={formData.firstName} onChange={handleChange} error={errors.firstName}/>
                            <Input type="text" placeholder="Enter Last Name" name="lastName" value={formData.lastName} onChange={handleChange} error={errors.lastName}/>
                        </div>
                        <div className="flex gap-[30px] max-tablet:gap-6 max-mobile:flex-col max-mobile:gap-5">
                            <Input type="text" placeholder="Enter your Email" name="email" value={formData.email} onChange={handleChange} error={errors.email}/>
                            <Input type="password" placeholder="Enter your Password" name="password" value={formData.password} onChange={handleChange} error={errors.password}/>
                        </div>
                    </div>

                    <div
                        className="flex flex-col gap-6 px-[254px] w-full
                            max-tablet:px-[130px]
                            max-mobile:px-0">
                        {errors.general && <p className="text-red-500">User already registered</p>}
                        <button
                            className="bg-green-60 rounded-full px-5 py-[18px] text-lg text-grey-15 transition duration-300 hover:bg-grey-15 hover:text-white active:bg-green-60 active:text-grey-15 cursor-pointer
                                max-tablet:px-6 max-tablet:py-3.5 max-tablet:text-sm
                                max-mobile:px-6 max-mobile:py-3.5 max-mobile:text-sm disabled:opacity-50" disabled={isSubmitting}>
                            {isSubmitting ? "Signing up..." : "Sign Up"}
                        </button>
                        <button
                            className="bg-grey-15 rounded-full border border-grey-20 text-white px-5 py-[18px] text-lg transition duration-300 hover:bg-green-60 hover:text-grey-15 active:bg-grey-15 active:text-white cursor-pointer
                                max-tablet:px-6 max-tablet:py-3.5 max-tablet:text-sm
                                max-mobile:px-6 max-mobile:py-3.5 max-mobile:text-sm" type="button" onClick={() => navigate(ROUTES.LOGIN)}>
                            Login
                        </button>

                        <div className="flex flex-col gap-[30px] items-center max-tablet:gap-6">
                            <div className="flex items-center gap-5 w-full max-tablet:gap-4">
                                <div className="flex-1 h-px bg-grey-70"></div>
                                <p className="text-center text-grey-70 text-lg whitespace-nowrap max-tablet:text-sm max-mobile:text-sm">
                                    Or Continue with
                                </p>
                                <div className="flex-1 h-px bg-grey-70"></div>
                            </div>
                            <div className="flex items-center justify-center gap-6 max-tablet:gap-5">
                                <button type="button" onClick={() => signInWithOAuth({provider: "google"})}>
                                    <GradientIcon icon={<FontAwesomeIcon icon={faGoogle} />} />
                                </button>
                                <button type="button" onClick={() => signInWithOAuth({provider: "facebook"})}>
                                    <GradientIcon icon={<FontAwesomeIcon icon={faFacebook} />} />
                                </button>
                                <button type="button" onClick={() => signInWithOAuth({provider: "apple"})}>
                                    <GradientIcon icon={<FontAwesomeIcon icon={faApple} />} />
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
            )}
        </div>

    )
}