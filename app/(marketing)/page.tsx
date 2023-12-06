import { Button } from "@/components/ui/button";
import { ArrowRightCircle } from "lucide-react";

import Link from "next/link";
import  localFont from "next/font/local";



import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const headingFont = localFont ({
    src : "../../public/fonts/font.woff2"
});

const textFont = Poppins ({
    subsets: ["latin-ext"],
    weight: [  "100", "200" , "300" , "400", "500", "600", "700", "800", "900"],
});

const page = () => {
    return (
        <div className=" flex items-center justify-center flex-col">
            <div className=" flex items-center justify-center flex-col">
                <div className=" mb-4 flex items-center border shadow-sm p-4 bg-[#EB5160] text-[#950B19] rounded-full uppercase">
                    <ArrowRightCircle className=" h-6 w-6 mr-2" />
                    New Server Platform
                </div>
                <h1 className= {cn(" text-3xl md:text-6xl text-center text-[#071013] mb-6", headingFont.className )}> 
                    DatNoc helps for your business
                </h1>
                <div className={cn(" text-3xl md:text-6xl bg-gradient-to-r from-[#950B19] to-[#B7999C] text-white px-4 p-2 rounded-md pb-4 w-fit", headingFont.className )}>
                    For Control.
                </div>
                <div className={cn(" text-sm md:text-xl text-[#071013] mt-4 max-w-xs md:max-w-2xl text-center mx-auto", textFont.className )}>
                Collaborate, manage projects, and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with DatNoc.
                </div>
              <div>
                <Button className=" mt-6" size="lg" asChild>
                    <Link href="/sign-up">
                    Get DatNoc Free
                    </Link>
                </Button>
              </div>
             
            </div>
        </div>
    );
}
export default page;