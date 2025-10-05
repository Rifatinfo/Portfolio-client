import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import Badge from "./Badge";

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
    return (
        <div>
            <Card>
                <CardHeader>
                    <div>
                        <Image className="absolute bottom-0 shadow-2xl" src='/assets/work/1.png' width={247} height={250} alt=''></Image>
                    </div>
                </CardHeader>
                <div className="h-full px-8 py-6">
                    <Badge containerStyles="uppercase text-sm font-medium mb-2 absolute top-4 left-5"
                    badgeText={project.category} />
                    <h4 className="h4 mb-1">{project.name}</h4>
                    <p className="text-muted-foreground text-lg">{project.description}</p>
                </div>
            </Card>
        </div>
    );
};

export default ProjectCard;