'use client';
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { useTheme } from "next-themes";
type Project = {
    image: string;
    category: string;
    name: string;
    description: string;
    link: string;
    github: string;
};

type ProjectCardProps = {
    project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    const { theme } = useTheme();

    const backgroundImage = theme === 'light' 
        ? '/assets/work/project-bg-light.png' 
        : '/assets/work/project-bg-dark.png';

    const backgroundImageStyle: React.CSSProperties = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    };
    return (
        <div>
            <Card className="group overflow-hidden relative hover:scale-105 hover:shadow-[#F3705C]/30 transition-all duration-300">
                <CardHeader className="p-0">
                    <div style={backgroundImageStyle} className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 ">
                        <Image className="absolute bottom-0 shadow-2xl rounded-2xl" src='/assets/work/1.png' width={247} height={240} alt=''></Image>
                    </div>
                </CardHeader>
                <div className="px-4 py-2">
                        <span className="absolute top-2 left-5 bg-primary text-white  font-semibold px-3 py-1 rounded-full shadow-md">
                          {project.category}
                        </span>
                    <h4 className="h4 mb-1">{project.name}</h4>
                    <p className="text-muted-foreground">{project.description}</p>
                </div>
            </Card>
        </div>
    );
};

export default ProjectCard;