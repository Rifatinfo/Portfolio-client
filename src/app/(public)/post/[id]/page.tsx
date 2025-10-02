import ArticleDetails from "@/components/ArticleDetails";

const BlogPageDetails = async ({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
    const { data: article } = await res.json();
    // const { blogId } = await params;
    return (
        <div>
            {/* <ArticleDetails article={article}/> */}
            {/* {blogId} */}
        </div>
    );
};

export default BlogPageDetails;

