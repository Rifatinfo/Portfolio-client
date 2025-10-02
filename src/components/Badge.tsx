import { ReactNode } from 'react';
import CountUp from 'react-countup';

type BadgeProps = {
  containerStyles?: string
  icon: ReactNode
  endCountNum: number
  badgeText: string
  start?: number
}

const Badge = ({containerStyles, icon, endCountNum, badgeText, start} : BadgeProps) => {
    return (
        <div className={`badge ${containerStyles}`}>
           <div className="text-3xl text-primary">{icon}</div>
           <div className='flex items-center gap-x-2'>
            <div className='text-4xl leading-none font-bold text-primary'>
                <CountUp end={endCountNum} start={start} delay={1} duration={4}/>
            </div>
            <div className='max-w-[70px] leading-none text-[15px] font-bold text-black'>
                {badgeText}
            </div>
           </div>
        </div>
    );
};

export default Badge;