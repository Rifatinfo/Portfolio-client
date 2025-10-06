import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

type Project = {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
};

const projectData: Project[] = [
  {
    image: "/assets/work/1.png",
    category: "react js",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, eaque.",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/1.png",
    category: "react js",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, eaque.",
    link: "/",
    github: "/",
  },
  {
    image: "/assets/work/1.png",
    category: "react js",
    name: "Next Website",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, eaque.",
    link: "/",
    github: "/",
  },

];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48 mt-12 md:p-0 p-4">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Text Column */}
          <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left  xl:h-[400px] flex flex-col justify-center items-center xl:items-start p-4">
            <h2 className="section-title mb-4 flex items-center gap-2">
              <Image
                src="/assets/dots-light.svg"
                width={20}
                height={20}
                alt=""
              />
              Latest Projects
            </h2>
            <div className="flex flex-col items-center justify-center w-full">
              <p className="subtitle-title mb-4">
                Lorem ipsum. Qui, conse quatur.
              </p>
              <Link href="/project">
                <Button>All Project</Button>
              </Link>
            </div>
          </div>

          {/* Slider Column */}
          <div className="flex-1">
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
              {projectData.slice(0, 4).map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
