'use client';
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const Article = () => {
    const article = [
        {
            id: 1,
            title: "E-Commerce Website Development",
            tag: "Web Development",
            image: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1759134006/46mfd802mh7-1759133902748-official-image-jpg.jpg.jpg",
            description:
                "Developed a modern e-commerce platform with product catalog, shopping cart, and secure payment integration using React, Node.js, and MongoDB.",
        },
        {
            id: 2,
            title: "Personal Portfolio Design",
            tag: "UI/UX Design",
            image: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1759134006/46mfd802mh7-1759133902748-official-image-jpg.jpg.jpg",
            description:
                "Designed and built a responsive personal portfolio website with smooth animations, dark/light mode support, and optimized performance.",
        },
        {
            id: 3,
            title: "Gym Management Application",
            tag: "Full Stack",
            image: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1759134006/46mfd802mh7-1759133902748-official-image-jpg.jpg.jpg",
            description:
                "Created a gym management system with class booking, user authentication, and admin dashboard using Express.js and MongoDB.",
        }
       
    ];

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto ">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex flex-col justify-center items-center p-6 rounded-2xl  bg-[#fef9f5] shadow hover:shadow-md"
                >
                    <h2 className="text-2xl md:text-4xl font-semibold text-red-400 mb-4">
                        Case Studies
                    </h2>

                    <div className="flex justify-center">
                        <Link
                            href="/"
                            className="border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 text-center text-gray-900 font-semibold transition-all duration-300 hover:bg-primary hover:text-white"
                        >
                            View All
                        </Link>
                    </div>
                </motion.div>
                {article.map((item) => (
                    <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="bg-white rounded-2xl p-4 space-y-4 shadow hover:shadow-md h-[470px]">
                            <Image
                                width={300}
                                height={193}
                                src={item.image}
                                alt={item.title}
                                className="w-full h-48 object-cover rounded-lg"
                            />

                            {/* Tag */}
                            <span className="inline-block bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold">
                                {item.tag}
                            </span>

                            {/* Title */}
                            <h2 className="text-lg md:text-xl font-bold text-gray-900">
                                {item.title}
                            </h2>

                            {/* Description */}
                            <p className="text-sm text-gray-600">{item.description}</p>

                            {/* Read more */}
                            <a
                                href="#"
                                className="inline-flex items-center text-purple-600 font-semibold text-sm hover:underline"
                            >
                                Read more <ArrowUpRight className="ml-1 h-4 w-4" />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Article;