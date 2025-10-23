import ProjectActionCard from "@/components/ui/projectActionCard";


const ProjectAction = async () => {
    const res = await fetch(`https://portfolio-puce-six-73.vercel.app/api/project`, {
        next: {
            tags: ["PROJECT"]
        }
    });
    const { data: project } = await res.json();
    return (
        <div>
           <ProjectActionCard project={project}/>
        </div>
    );
};

export default ProjectAction;