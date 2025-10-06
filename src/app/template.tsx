'use client'
import useScrollProgress from '@/components/hooks/useScrollProgress';
import {motion} from 'framer-motion';
import { ReactNode } from 'react';

interface TemplateProps {
    children : ReactNode
}

// variants 
const variants = {
    hidden : {opacity : 0},
    enter : {opacity : 1}
}

const Template = ({children} : TemplateProps ) => {
    const completion = useScrollProgress();
    return (
        <div>
            <motion.main
             variants={variants}
             initial='hidden'
             animate='enter'
             transition={{ease : 'linear', delay : 0.2, duration : 0.4}}
            >{children}</motion.main>
            <span
            style={{ height: `${completion}%` }}
            className='fixed z-50 bg-primary w-1 top-0 right-0 border-0 translation-all duration-700'
            ></span>
            <div></div>
        </div>
    );
};

export default Template;