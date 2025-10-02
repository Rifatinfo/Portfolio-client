import Link from "next/link";
import ArticleCard from "./ArticleCard";

interface Article {
  id: string;
  title: string;
  tags: string[];
  thumbnail: string;
  content: string;
  view : number
}

const Article = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
        next : {
            revalidate : 10
        }
    });
    const {data : article} = await res.json();
    // const article : Article[] = [
    //     {
    //         id: 1,
    //         title: "E-Commerce Website Development",
    //         tag: "Web Development",
    //         image: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1759134006/46mfd802mh7-1759133902748-official-image-jpg.jpg.jpg",
    //         description:
    //             "Developed a modern e-commerce platform with product catalog, shopping cart, and secure payment integration using React, Node.js, and MongoDB.",
    //     },
    //     {
    //         id: 2,
    //         title: "Personal Portfolio Design",
    //         tag: "UI/UX Design",
    //         image: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1759134006/46mfd802mh7-1759133902748-official-image-jpg.jpg.jpg",
    //         description:
    //             "Designed and built a responsive personal portfolio website with smooth animations, dark/light mode support, and optimized performance.",
    //     },
    //     {
    //         id: 3,
    //         title: "Gym Management Application",
    //         tag: "Full Stack",
    //         image: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1759134006/46mfd802mh7-1759133902748-official-image-jpg.jpg.jpg",
    //         description:
    //             "Created a gym management system with class booking, user authentication, and admin dashboard using Express.js and MongoDB.",
    //     },
    //     {
    //         id: 4,
    //         title: "Gym Management Application",
    //         tag: "Full Stack",
    //         image: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1759134006/46mfd802mh7-1759133902748-official-image-jpg.jpg.jpg",
    //         description:
    //             "Created a gym management system with class booking, user authentication, and admin dashboard using Express.js and MongoDB.",
    //     },
    //     {
    //         id: 5,
    //         title: "Gym Management Application",
    //         tag: "Full Stack",
    //         image: "https://res.cloudinary.com/dgp5rqeqh/image/upload/v1759134006/46mfd802mh7-1759133902748-official-image-jpg.jpg.jpg",
    //         description:
    //             "Created a gym management system with class booking, user authentication, and admin dashboard using Express.js and MongoDB.",
    //     }
       
    // ];
    console.log(article);
    
    return (
        <div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto ">
                <div
                    className="flex flex-col justify-center items-center p-6 rounded-2xl  bg-[#fef9f5] shadow hover:shadow-md transition-transform duration-300 ease-out hover:scale-105"
                >
                    <h2 className="text-2xl md:text-4xl font-semibold text-red-400 text-center mb-4">
                        Insights & Articles
                    </h2>

                    <div className="flex justify-center">
                        <Link
                            href="/"
                            className="border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 text-center text-gray-900 font-semibold transition-all duration-300 hover:bg-primary hover:text-white"
                        >
                            View All
                        </Link>
                    </div>
                </div>
                {article.slice(0,3).map((item : Article, idx : number) => (
                    <ArticleCard item={item} key={idx}/>
                ))}
            </div>
        </div>
    );
};

export default Article;