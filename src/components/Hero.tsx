import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import Social from "./Social";
const Hero = () => {
    return (
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    {/* text */}
                    <div className="flex flex-col justify-center max-w-[600px]  mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
                        <h1 className="h1">Hello, My name is Md Rifat Hossain</h1>
                        <p className="subtitle max-w-[409px] mx-auto xl:mx-0">Brief description with insight into myself , my vocational journey , and what I engage in professionally</p>
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 justify-start mb-6">
                            <Link href="/contact">
                                <Button className="gap-x-2">
                                    Contact me <Send size={18} />
                                </Button>
                            </Link>
                            <Button variant='secondary' className="gap-x-2">
                                Download CV <Download size={18} />
                            </Button>
                        </div>
                        {/* social icon */}
                        <Social
                            containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                            iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
                        />
                    </div>
                    {/* image */}
                    <div className="hidden xl:flex relative">
                        
                    </div>
                </div>
                {/* icon */}
                <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
                    <RiArrowDownSLine className="text-3xl text-primary" />
                </div>
            </div>
        </section>
    );
};

export default Hero;