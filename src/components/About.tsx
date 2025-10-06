import { Briefcase, Calendar, GraduationCap, GraduationCapIcon, HomeIcon, MailIcon, PhoneCall, User2 } from "lucide-react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

interface QualificationItem {
    university?: string;
    company?: string;
    qualification: string;
    year: string;
}

interface SkillItem {
    name?: string;
    imgPath?: string;
}

interface DataSection<T> {
    title?: string;
    data: T[];
}

interface Education {
    university: string;
    qualification: string;
    years: string;
}

interface Experience {
    company: string;
    qualification: string;
    years: string;
}

type QualificationSection =
    | { title: 'education'; data: Education[] }
    | { title: 'experience'; data: Experience[] };

const About = () => {
    const infoData = [
        {
            icon: <User2 size={20} />,
            text: 'Md Rifat Hossain',
        },
        {
            icon: <PhoneCall size={20} />,
            text: '01792842921',
        },
        {
            icon: <MailIcon size={20} />,
            text: 'mdrifathossainsinfo@gmail.com',
        },
        {
            icon: <Calendar size={20} />,
            text: 'Born on 2 February , 2005',
        },
        {
            icon: <GraduationCap size={20} />,
            text: 'Study at computer science and engineering , 2005',
        },
        {
            icon: <HomeIcon size={20} />,
            text: 'Dhaka , Bangladesh',
        },
    ]
    const qualificationData: QualificationSection[] = [
        {
            title: 'education',
            data: [
                {
                    university: 'Example Collage',
                    qualification: 'Higher Secondary',
                    years: '2018-2020'
                },
                {
                    university: 'Texas University',
                    qualification: 'Bachelor of Science',
                    years: '2025-2026'
                }
            ]
        },
        {
            title: 'experience',
            data: [
                {
                    company: 'Example Company',
                    qualification: 'software Engineer',
                    years: '2018-2020'
                },
                {
                    company: 'Example Company',
                    qualification: 'software Engineer',
                    years: '2018-2020'
                }
            ]
        },
    ]




    function getData<T extends QualificationSection['title']>(
        data: QualificationSection[],
        title: T
    ): Extract<QualificationSection, { title: T }> | undefined {
        return data.find((item): item is Extract<QualificationSection, { title: T }> => item.title === title)
    }

    return (

        <section className="xl:h-[860px] xl:py-24">
            <div className="container mx-auto">
                <div>
                    <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto"><span><Image src='/assets/dots-light.svg' width={20} height={20} alt=''></Image></span> About me</h2>
                </div>
            </div>

            {/* image */}
            <div className="container mx-auto  flex flex-col xl:flex-row">
                {/* image */}
                <div className="hidden xl:flex flex-1  bg-no-repeat relative">
                    <Image src='/assets/rifat/banner-3.png' width={505} height={505} alt=''></Image>
                </div>

                <div className="flex-1">
                    <Tabs className="" defaultValue='personal'>
                        <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none bg-transparent p-0 border-none">
                            <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal</TabsTrigger>
                            <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                            <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                        </TabsList>

                        <div className="text-lg mt-12 xl:mt-8">
                            {/* personal */}
                            <TabsContent className="mt-20 md:mt-0" value="personal">
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-4">Unmatched Service Quantity for Over 10 Years</h3>
                                    <p className="subtitle max-w-xl mx-auto xl:mx-0">Special in crefting intutive with cutting-edge techology, delivering dynamic and engaging user experience</p>
                                </div>
                                {/* icon */}
                                <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                    {
                                        infoData.map((item, idx) => {
                                            return (
                                                <div key={idx} className="flex items-center gap-x-4 mx-auto xl:mx-0">
                                                    <div className="text-primary">{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                {/* languages */}
                                <div className="flex flex-col gap-y-2">
                                    <div className="text-primary">Language Skills</div>
                                    <div className="border-b border-border"></div>
                                    <div>English, Bangla</div>
                                </div>
                            </TabsContent>
                            {/* qualifications */}
                            <TabsContent className="mt-20 md:mt-0" value="qualifications">
                                {/* <div>
                                    <h3>My Awesome Journey</h3>
                                </div> */}
                                {/* experience and education wrapper */}
                                <div className="grid md:grid-cols-2 gap-y-8">
                                    {/* experience */}
                                    <div>

                                        <div className="flex gap-x-4 mb-4  item-center text-[22px]">
                                            <Briefcase size={28} />
                                            <h3 className="capitalize font-medium">
                                                {getData(qualificationData, 'experience')?.title}
                                            </h3>
                                        </div>

                                        {/* list */}
                                        <div className="flex flex-col gap-y-10">
                                            {getData(qualificationData, 'experience')?.data.map((item, idx) => {
                                                const { company, qualification, years } = item;
                                                return (
                                                    <div key={idx} className="flex gap-x-6 group relative">
                                                        {/* Timeline line + dot */}
                                                        <div className="flex flex-col items-center relative">
                                                            {/* Dot */}
                                                            <div className="w-3 h-3 rounded-full bg-primary z-10 group-hover:translate-y-[84px] transition-all duration-500 "></div>
                                                            {/* Line (extends downward) */}
                                                            {idx !== getData(qualificationData, 'experience')!.data.length - 1 && (
                                                                <div className="w-[2px] h-full bg-border mt-2"></div>
                                                            )}
                                                        </div>

                                                        {/* Content */}
                                                        <div>
                                                            <h4 className="font-semibold text-xl leading-tight">{company}</h4>
                                                            <p className="text-lg text-muted-foreground">{qualification}</p>
                                                            <p className="text-base font-medium">{years}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                    </div>
                                    {/* education */}
                                    <div>

                                        <div className="flex gap-x-4 mb-4 item-center text-[22px]">
                                            <GraduationCapIcon size={28} />
                                            <h3 className="capitalize font-medium">
                                                {getData(qualificationData, 'education')?.title}
                                            </h3>
                                        </div>


                                        <div className="flex flex-col gap-y-10">
                                            {getData(qualificationData, 'education')?.data.map((item, idx) => {
                                                const { university, qualification, years } = item;
                                                return (
                                                    <div key={idx} className="flex gap-x-6 group relative">
                                                        {/* Timeline line + dot */}
                                                        <div className="flex flex-col items-center relative">
                                                            {/* Dot */}
                                                            <div className="w-3 h-3 rounded-full bg-primary z-10 group-hover:translate-y-[84px] transition-all duration-500 "></div>
                                                            {/* Line (extends downward) */}
                                                            {idx !== getData(qualificationData, 'experience')!.data.length - 1 && (
                                                                <div className="w-[2px] h-full bg-border mt-2"></div>
                                                            )}
                                                        </div>

                                                        {/* Content */}
                                                        <div>
                                                            <h4 className="font-semibold text-xl leading-tight">{university}</h4>
                                                            <p className="text-lg text-muted-foreground">{qualification}</p>
                                                            <p className="text-base font-medium">{years}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="skills">
                                {/* Skills */}
                                <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                <div className="border-b border-border mb-4"></div>
                                {/* Skills */}
                                
                                <div className="grid grid-cols-4 md:grid-cols-7 gap-6 place-items-center">
                                    {[
                                        "/assets/web/images.png",
                                        "/assets/web/css.png",
                                        "/assets/web/docker.webp",
                                        "/assets/web/express.png",
                                      
                                        "/assets/web/graphql.png",
                                        "/assets/web/html.png",
                                        "/assets/web/js.png",
                                        "/assets/web/logo-sm.png",
                                    
                                        "/assets/web/mui.png",
                                        "/assets/web/next.png",
                                        "/assets/web/node-js.png",
                                        "/assets/web/postger.png",
                                        "/assets/web/prisma.webp",
                                        "/assets/web/redux.png",
                                        "/assets/web/react.png",
                                        "/assets/web/tailwind.png",
                                    ].map((src, idx) => (
                                        <div
                                            key={idx}
                                            className="p-4 rounded-2xl  border 
                                             hover:scale-110 hover:shadow-[#F3705C]/30 transition-all duration-300 shadow-md 
                                             flex items-center justify-center group"
                                        >
                                            <Image
                                                src={src}
                                                width={50}
                                                height={50}
                                                alt="Tech Logo"
                                                className="object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                    ))}
                                </div>

                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default About;
