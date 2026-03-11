import {Suspense} from "react"
import {Outlet} from "react-router-dom"
import Header from "@/widgets/header";
import Footer from "@/widgets/footer";

export default function Layout() {
    return (
        <>
            <Header/>
            <main>
                <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh] text-white">Loading...</div>}>
                    <Outlet/>
                </Suspense>
            </main>
            <Footer/>
        </>
    )
}
