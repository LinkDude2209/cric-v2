import { Signup } from "@/components/ui/sign-up"
import Image from "next/image"
import Navbar from "../components/header/navbar"
import Footer from "../components/footer/footer"

export default function SignupForm() {
    return (
        <>
            <Navbar />
            <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
                <div className="flex w-full max-w-sm flex-col gap-6">
                    <a href="#" className="flex items-center gap-2 self-center font-medium">

                        <Image src="/logo.svg" height={200} width={200} alt="logo" />
                    </a>
                    <Signup />
                </div>
            </div>
            <Footer />
        </>
    )
}
