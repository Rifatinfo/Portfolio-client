import { Calendar, GraduationCap, HomeIcon, MailIcon, PhoneCall, User2 } from "lucide-react";
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

const About = () => {
    const infoData = [
        {
            icon: <User2 size={20} />,
            text: 'Ryan Davis',
        },
        {
            icon: <PhoneCall size={20} />,
            text: 'Ryan Davis',
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
    const qualificationData = [
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
    const skillData = [
        {
            title: 'skills',
            data: [
                {
                    name: 'HTML, CSS'
                },
                {
                    name: 'HTML, CSS'
                },
                {
                    name: 'Front-end Developer'
                },
                {
                    name: 'Javascript, PHP'
                },
                {
                    name: 'Backend Developer'
                },
            ]
        },
        {
            title: 'tools',
            data: [
                {
                    imgPath: '/assets/about/vscode.svg'
                },
                {
                    imgPath: '/assets/about/figma.svg'
                },
                {
                    imgPath: '/assets/about/wordpress.svg'
                },
            ]
        }
    ]

    function getData<T>(arr: DataSection<T>[], title: string): DataSection<T> | undefined {
        return arr.find((item) => item.title === title);
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
                <div className="hodden xl:flex flex-1 border bg-no-repeat relative">
                    <Image src='/assets/rifat/banner-3.png' width={505} height={505} alt=''></Image>
                </div>

                <div className="flex-1 border">
                    <Tabs  defaultValue='personal'>
                        <TabsList className="w-full grid grid-cols-3 xl:max-w-[520px] xl:border dark:border-none bg-transparent p-0 border-none">
                            <TabsTrigger value="personal">Personal</TabsTrigger>
                            <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                        </TabsList>
                        {/* personal */}
                        <div className="text-lg mt-12 xl:mt-8">
                            <TabsContent value="personal">personal info</TabsContent>
                            <TabsContent value="qualifications">qualifications info</TabsContent>
                            <TabsContent value="skills">personal info</TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </section>
    );
};

export default About;
