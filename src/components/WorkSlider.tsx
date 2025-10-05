'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import ProjectCard from "./ProjectCard";

type Project = {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
  github: string;
};

type WorkSliderProps = {
  projectData: Project[];
};


const WorkSlider = ({  projectData } : WorkSliderProps) => {
    return (
        <div className="max-w-[400px] xl:absolute right-0 top-0">
            <Swiper  className="h-[480px]"
             slidesPerView={1}
             breakpoints={{
                640 : {
                    slidesPerView : 2
                }
             }}
             spaceBetween={30}
             pagination={{clickable : true}}
            >
                {projectData.slice(0, 4).map((project : Project, idx : number) => {
                    return (
                        <SwiperSlide key={idx}>
                            <ProjectCard project={project} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
};

export default WorkSlider;