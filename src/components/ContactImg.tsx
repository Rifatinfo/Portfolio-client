'use client';

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";


const ContactImg = () => {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const image = mounted
        ? theme === "dark"
            ? "/assets/contact/illustration-dark.svg"
            : "/assets/contact/illustration-light.svg"
        : "/assets/contact/illustration-light.svg"; // default server render


    const backgroundImageStyle = {
        backgroundImage: `url(${image})`,
    }

    return (
        <div style={backgroundImageStyle} className="w-full h-full flex items-end justify-end bg-tertiary bg-no-repeat bg-right">
           
        </div>
    );
};

export default ContactImg;