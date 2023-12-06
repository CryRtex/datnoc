import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import localFont from "next/font/local"

const headingFont = localFont({
    src : "../public/fonts/font.woff2",
});

export const Logo = () => {
    return (
    <Link href="/">
        <div className=" hover:opacity-75 trasition items-center gap-x-2 md:flex">
            <Image src="/logo.svg" alt="DatNoc Logo" width={30} height={30} />
            <p className={cn(" text-xl text-[#071013] pb-0" , headingFont.className)}>
                DatNoc 
            </p>
        </div>
    </Link>
    )
}