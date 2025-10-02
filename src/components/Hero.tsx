'use client';
import Link from "next/link";
import { RiArrowDownSLine, RiBriefcaseFill, RiTeamFill, RiTodoFill } from "react-icons/ri";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import Social from "./Social";
import Image from "next/image";
import Badge from "./Badge";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import lightHeroImg from '../../public/assets/hero/hero-bg.png';
import darkHeroImg from '../../public/assets/hero/shape-2-dark.svg';
const Hero = () => {
    const [bg, setBg] = useState<string>("");
     const {theme} = useTheme();
    useEffect(() => {
        if(theme === 'light'){
            setBg(`url(${lightHeroImg.src})`)
        }else{
            setBg(`url(${darkHeroImg.src})`)
        }
    },[theme])
   
    const backgroundImageStyle : React.CSSProperties = {
        // backgroundImage: theme === 'dark' ? '' : 'url(https://i.ibb.co.com/BVWbZtcj/hero-bg.png)', 
        backgroundImage: bg,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        margin: 0,
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };
    return (
        <section style={backgroundImageStyle}  className="py-12 xl:py-24 h-[84vh] xl:pt-28">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8 md:0 p-2">
                    {/* text */}
                    <div className="flex flex-col justify-center max-w-[600px]  mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
                        <h1 className="h1">Hello, My name is Md Rifat Hossain</h1>
                        <p className="subtitle max-w-[409px] mx-auto xl:mx-0">Brief description with insight into myself , my vocational journey , and what I engage in professionally</p>
                        <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 auto xl:mx-0 mb-6">
                            <Link href="/contact">
                                <Button className="gap-x-2">
                                    Contact me <Send size={18} />
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button variant='secondary' className="gap-x-2">
                                   Download CV <Download size={18} />
                                </Button>
                            </Link>
                        </div>
                        {/* social icon */}
                        <Social
                            containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                            iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
                        />
                    </div>
                    {/* image */}
                    <div className="hidden xl:flex relative">
                        <Badge icon={<RiBriefcaseFill/> } containerStyles='absolute top-[24%] -left-[5rem]' endCountNum={2} start={0} badgeText='Years of Experience'/>
                        <Badge icon={<RiTodoFill/> } containerStyles='absolute top-[70%] -left-[1rem] border' endCountNum={6} start={0} badgeText='Finish Projects'/>
                        <Badge icon={<RiTeamFill/> } containerStyles='absolute top-[55%] -right-14' endCountNum={9} start={0} badgeText='Happy Clients'/>
                        <div className="absolute top-16 -right-1">
                             <Image src='/assets/hero/shape-2-light.svg' width={500} height={500} alt=''></Image>
                        </div>
                        <div className="relative bg-bottom">
                             <Image src='/assets/hero/cover_2.svg' width={510} height={462} alt=''></Image>
                        </div>
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