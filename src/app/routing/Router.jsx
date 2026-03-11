import {lazy} from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {ROUTES} from "@/shared/config/routes.js";
import Layout from "@/app/layout";


const Main = lazy(() => import("@/pages/Main"))

const Careers = lazy(() => import("@/pages/Careers"))

const About = lazy(() => import("@/pages/About"))

const Security = lazy(() => import("@/pages/Security"))

const Login = lazy(() => import("@/pages/Login"))

const Signin = lazy(() => import("@/pages/Signin"))

export default function Router() {
    return (<BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path={ROUTES.HOME} element={<Main/>}/>
                <Route path={ROUTES.CAREERS} element={<Careers/>}/>
                <Route path={ROUTES.ABOUT} element={<About/>}/>
                <Route path={ROUTES.SECURITY} element={<Security/>}/>
                <Route path={ROUTES.LOGIN} element={<Login/>}/>
                <Route path={ROUTES.SIGNUP} element={<Signin/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}
