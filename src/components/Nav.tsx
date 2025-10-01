'use client';
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavProps {
    containerStyles? : string,
    linkStyles? : string,
    underLineStyles? : string
}
const links = [
    {path : '/', name : 'home'},
    {path : '/project', name : 'my projects'},
    {path : '/contact', name : 'contact'},
    {path : '/blog', name : 'blog'},
]

const Nav = ({containerStyles, linkStyles, underLineStyles} : NavProps) => {
    const path = usePathname();
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={`capitalize ${linkStyles}`}>
                        {link.path === path && (
                            <motion.span
                            initial={{y: '-100%'}}
                            animate={{y : 0}}
                            transition={{type : 'tween'}}
                            layoutId='underline'
                            className={`${underLineStyles}`}
                            />
                        )}
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    );
};

export default Nav;