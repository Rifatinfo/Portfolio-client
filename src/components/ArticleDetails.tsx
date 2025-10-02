'use client';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
interface Article {
    id: string;
    title: string;
    tags: string[];
    thumbnail?: string | null;
    content: string;
    view: number;
    subtitle: string;
    excerpt : string
}

interface ArticleCardProps {
    article: Article
}


export default function ArticleDetails({article} : ArticleCardProps) {
  console.log(article);
  
  if (!article) {
    return <p className="text-center text-gray-500">Content Not Available</p>;
  }
 
  return (
    <div className="py-10 px-2 md:px-50 md:flex md:items-start mt-10">
      {/* Left content */}
      <div className="py-10 px-2 md:px-20 w-full">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {article.title}
          </motion.p>
          <motion.p
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {article.subtitle}
          </motion.p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div className="rounded-lg " whileHover={{ scale: 1.02 }}>
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p className="text-gray-600 mt-2">{article.title}</p>
          </motion.div>

          {/* Example Extra Section */}
          <motion.div className="rounded-lg">
            <h2 className="text-2xl font-semibold">{article.excerpt}</h2>
            <p className="text-gray-600 mt-2">
              {article.content}
            </p>
          </motion.div>

          {/* Example Image */}
          {article.thumbnail ? <>
          <motion.div
            className="max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              width={400}
              height={400}
              src={article.thumbnail}
              alt="Express API"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div></> : null}

        </div>
        
      </div>

      {/* Right Sidebar - Tags */}
      <div className="space-y-4 p-2 md:w-2/5 md:mt-8">
        {article.tags?.map((tag, idx) => (
          <button
            key={idx}
            className="w-full flex items-center justify-between bg-gray-100 px-4 py-3 font-medium text-gray-900 hover:bg-gray-200 transition rounded"
          >
            {tag}
            <ArrowRight className="w-4 h-4 text-red-600 font-semibold" />
          </button>
        ))}
      </div>
    </div>
  );
}
