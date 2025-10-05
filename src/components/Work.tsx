import 'swiper/css';
import 'swiper/css/pagination'
import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import WorkSlider from './WorkSlider';

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
        image: '',
        category: 'react js',
        name: 'Next Website',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo, eaque.',
        link: '/',
        github: '/'
    },
]

const Work = () => {
    return (
        <section className='relative mb-12 xl:mb-48'>
            <div className='container mx-auto'>
                {/* text */}
                <div>
                    <div className='max-w-[400px] mx-auto xl:mx-0 text-center border-2 xl:text-left  xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                        <h2 className="section-title text-center mb-4 mx-auto"><span><Image src='/assets/dots-light.svg' width={20} height={20} alt=''></Image></span> Latest Projects</h2>
                        <div className='flex flex-col items-center justify-center border w-full
                        '>
                            <p className='subtitle-title mb-4'>Lorem ipsum . Qui, conse quatur.</p>
                            <Link href="/project">
                                <Button>All Project</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* slide */}
                <div className='border'>
                    <WorkSlider projectData={projectData} />
                </div>
            </div>
        </section>
    );
};

export default Work;

