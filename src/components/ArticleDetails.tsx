'use client';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
interface Article {
    id: string;
    title: string;
    tags: string[];
    thumbnail: string;
    content: string;
    view: number
}

export default function ArticleDetails({article} : Article) {
  // const caseStudy = {
  //   title: "Mastering REST APIs with Express.js",
  //   subtitle: "From beginner to production-ready backend",
  //   content:
  //     "In this guide, we cover how to design and build REST APIs with Express.js, including routing, middleware, authentication, and error handling.",
  //   excerpt:
  //     "Learn how to create secure and scalable REST APIs with Express.js for real-world projects.",
  //   thumbnail:
  //     "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1755777692/samples/landscapes/nature-mountains.jpg",
  //   isFeatured: false,
  //   tags: ["express", "api", "nodejs", "rest"],
  //   view: 87,
  // };

  return (
    <div className="py-10 px-2 md:px-50 md:flex md:items-start mt-10">
      {/* Left content */}
      <div className="py-10 px-2 md:px-20 w-full">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {caseStudy.title}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {caseStudy.subtitle}
          </motion.p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div className="rounded-lg " whileHover={{ scale: 1.02 }}>
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p className="text-gray-600 mt-2">{caseStudy.content}</p>
          </motion.div>

          {/* Example Extra Section */}
          <motion.div className="rounded-lg">
            <h2 className="text-2xl font-semibold">Why Express.js?</h2>
            <p className="text-gray-600 mt-2">
              Express.js provides a simple, unopinionated framework for building
              APIs quickly. It is widely used in production apps and supports
              middleware, authentication, and routing.
            </p>
          </motion.div>

          {/* Example Image */}
          <motion.div
            className="max-w-4xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              width={400}
              height={400}
              src="https://res.cloudinary.com/dgp5rqeqh/image/upload/v1755777692/samples/landscapes/nature-mountains.jpg"
              alt="Express API"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>


        </div>
        
      </div>

      {/* Right Sidebar - Tags */}
      <div className="space-y-4 p-2 md:w-2/5 md:mt-8">
        {caseStudy.tags.map((tag, idx) => (
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
