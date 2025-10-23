import BlogActionCard from "@/components/ui/BlogActionCard";


const BlogAction = async () => {
     const res = await fetch(`https://portfolio-puce-six-73.vercel.app/api/post`, {
      cache: "no-store"
    });
    const { data: articles } = await res.json();
    return (
        <div>
            <BlogActionCard articles={articles}/>
        </div>
    );
};

export default BlogAction;