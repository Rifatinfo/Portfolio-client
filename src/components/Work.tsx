import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

export type Project = {
  thumbnail: string;
  tech: string[];
  title: string;
  desc: string;
  live_url: string;
  github: string;
};



const Work = async () => {
   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
        next : {
            tags : ["PROJECT"]
        }
    });
    const {data : project} = await res.json();
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
              {project.slice(0, 3).map((project : Project, idx : number) => (
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
