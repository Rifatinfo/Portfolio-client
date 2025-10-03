import ArticleCard from "@/components/ArticleCard";
import { Metadata } from "next";

interface Article {
    id: string;
    title: string;
    tags: string[];
    thumbnail: string;
    content: string;
    view : number
}

export const metadata: Metadata = {
    title : "All Blogs | Next Blogs",
    description : "Browse all blog on web development"
}




const AllBlogPage = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
      cache: "no-store"
    });
    const { data: article } = await res.json();
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {article.map((item: Article, idx: number) => (
                    <ArticleCard item={item} key={idx} />
                ))}
            </div>
        </div>
    );
};

export default AllBlogPage;