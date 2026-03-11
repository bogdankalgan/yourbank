import {useState} from "react";
import {useNavigate} from "react-router-dom"
import { Canvas } from "@react-three/fiber"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle, faFacebook, faApple } from "@fortawesome/free-brands-svg-icons"
import { GradientIcon } from "@/shared/ui/index.js"
import Input from "@/shared/ui/Input"
import DotsPlane from "@/shared/ui/DotsPlane.jsx"
import { DiamondPattern } from "@/shared/ui/index.js"
import {signInWithOAuth, login} from "@/features/auth/index.js";
import {ROUTES} from "@/shared/config/routes.js";


export default function LoginForm() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
        setErrors({...errors, [e.target.name]: ""})
    }

    const validate = () => {
        const newErrors = {}
        if(!formData.email) newErrors.email = "Required"
        if(!formData.password) newErrors.password = "Required"

        return Object.keys(newErrors).length > 0 ? newErrors : null
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = validate()
        if(validationErrors) {
            setErrors(validationErrors)
            return
        }
        setIsSubmitting(true)
        const { error } = await login(formData)
        if(error) {
            setErrors({general: error.message})
        } else {
            navigate(ROUTES.HOME)
        }
        setIsSubmitting(false)
    }

    return (
        <div className="flex justify-center px-4">
            <div
                className="flex flex-col gap-80 relative px-150 py-100 border border-grey-15 rounded-[20px]
                    w-full max-w-[1326px] max-tablet:max-w-[1064px]
                    max-tablet:px-[200px] max-tablet:py-80 max-tablet:gap-[60px] max-tablet:rounded-2xl
                    max-mobile:p-[30px] max-mobile:gap-10 max-mobile:rounded-2xl"
            >
                <div
                    className="w-[342px] h-[325px] absolute top-0 right-[-1px] z-[1]
                        max-tablet:w-[256px] max-tablet:h-[243px]
                        max-mobile:w-[167px] max-mobile:h-[159px]"
                >
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
                        <span>Login</span>
                    </h2>
                    <p className="text-grey-75 max-tablet:text-16 max-mobile:text-sm">
                        Welcome back! Please log in to access your account.
                    </p>
                </div>

                <form className="flex flex-col gap-10 relative z-10 max-tablet:gap-[30px] max-mobile:gap-6" onSubmit={handleSubmit}>
                    <div className="flex items-center gap-[30px] max-tablet:gap-6 max-mobile:flex-col max-mobile:gap-5">
                        <Input type="text" placeholder="Enter your Email" error={errors.email} value={formData.email} onChange={handleChange} name="email"/>
                        <Input type="password" placeholder="Enter your Password" error={errors.password} value={formData.password} onChange={handleChange} name="password"/>
                    </div>

                    <div className="text-center">
                        <span className="text-white underline text-lg max-tablet:text-16 max-mobile:text-sm cursor-pointer">
                            Forgot Password?
                        </span>
                    </div>

                    <div
                        className="flex flex-col gap-6 px-[254px] w-full
                            max-tablet:px-[130px]
                            max-mobile:px-0"
                    >
                        <button
                            className="bg-green-60 rounded-full px-5 py-[18px] text-lg text-grey-15 transition duration-300 hover:bg-grey-15 hover:text-white active:bg-green-60 active:text-grey-15 cursor-pointer
                                max-tablet:px-6 max-tablet:py-3.5 max-tablet:text-sm
                                max-mobile:px-6 max-mobile:py-3.5 max-mobile:text-sm" type="submit" disabled={isSubmitting}
                        >
                            Login
                        </button>
                        {errors.general && <p className="text-red-500">Invalid login or password</p>}
                        <button
                            className="bg-grey-15 rounded-full border border-grey-20 text-white px-5 py-[18px] text-lg transition duration-300 hover:bg-green-60 hover:text-grey-15 active:bg-grey-15 active:text-white cursor-pointer
                                max-tablet:px-6 max-tablet:py-3.5 max-tablet:text-sm
                                max-mobile:px-6 max-mobile:py-3.5 max-mobile:text-sm" onClick={() => navigate(ROUTES.SIGNUP)} type="button"
                        >

                            Sign Up
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
    )
}