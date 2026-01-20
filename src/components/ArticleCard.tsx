'use client'
import Image from "next/image";
import { ArrowUpRight, EyeIcon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";


interface Article {
    id: string;
    title: string;
    tags: string[];
    thumbnail: string;
    content: string;
    view: number
}

interface ArticleCardProps {
    item: Article
}

const ArticleCard = ({ item }: ArticleCardProps) => {
    return (
        <Link  href={`/post/${item.id}`}>
            <div>
                <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="bg-white dark:bg-[#fef9f5] rounded-2xl p-4 space-y-4 shadow hover:shadow-md h-[470px]">
                        <Image
                            width={300}
                            height={193}
                            src={item.thumbnail}
                            alt={item.title}
                            className="w-full h-48 object-cover rounded-lg"
                        />

                        {/* Tag */}
                        <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="inline-block bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm font-semibold"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>


                        {/* Title */}
                        <h2 className="text-lg md:text-xl font-bold text-gray-900">
                            {item.title}
                        </h2>

                        {/* Description */}
                        {/* <p className="text-sm text-gray-600">{item.content}</p> */}

                        {/* Read more */}
                        <div className="flex justify-between items-center">
                            <span
                               
                                className="inline-flex items-center text-primary font-semibold text-sm hover:underline"
                            >
                                Read more <ArrowUpRight className="ml-1 h-4 w-4" />
                            </span>
                            <span
                               
                                className="inline-flex items-center text-primary font-semibold text-sm hover:underline"
                            >
                                {item.view}<EyeIcon className="ml-1 h-4 w-4" />

                            </span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Link>
    );
};

export default ArticleCard;