'use client';
// import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { useTheme } from "next-themes";
import { Project } from "./Work";
import { useEffect, useState } from "react";
// import Link from "next/link";
import { Link2Icon } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
    project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Render a placeholder during SSR to avoid mismatch
        return (
            <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40" />
        );
    }
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
                        {project.thumbnail ? (
                            <Image className="absolute bottom-0 shadow-2xl rounded-2xl" src={project.thumbnail} width={247} height={240} alt={project.title || 'Project thumbnail'}></Image>
                        ) : (<div className="absolute bottom-0 w-[247px] h-[240px] bg-gray-300 rounded-2xl flex items-center justify-center text-gray-600">
                            No Image
                        </div>)}
                        <div className="flex gap-x-4">
                            <Link href={project.live_url} className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all">
                                <Link2Icon className="text-primary" />
                            </Link>
                            <Link href={project.github} className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all">
                                <GitHubLogoIcon  className="text-primary" />
                            </Link>
                        </div>
                    </div>

                </CardHeader>
                <div className="px-4 py-2">
                    {project.tech.slice(0, 1).map((tag, idx) => (
                        <span key={idx} className="absolute top-2 left-5 bg-primary text-white  font-semibold px-3 py-1 rounded-full shadow-md">
                            {tag}
                        </span>
                    ))}
                    {project.tech.map((tag, idx) => (
                        <span
                            key={idx}
                            className="inline-block bg-gray-100 text-gray-800 px-4 py-1 mb-2 rounded-full text-sm font-semibold"
                        >
                            {tag}
                        </span>
                    ))}
                    <h4 className="h4 mb-1">{project.title}</h4>
                    <p className="text-muted-foreground">{project.desc}</p>
                </div>
            </Card>
        </div>
    );
};

export default ProjectCard;