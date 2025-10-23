
export type Project = {
  thumbnail: string;
  tech: string[];
  title: string;
  desc: string;
  live_url: string;
  github: string;
};

import ProjectCard from "@/components/ProjectCard";
const Project = async () => {
    const res = await fetch(`https://portfolio-puce-six-73.vercel.app/api/project`, {
        next: {
            tags: ["PROJECT"]
        }
    });
    const { data: project } = await res.json();
    return (
        <div className="container mx-auto md:p-0 p-2">
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-4">
                {project?.map((project : Project, idx : number) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
        </div>
    );
};

export default Project;