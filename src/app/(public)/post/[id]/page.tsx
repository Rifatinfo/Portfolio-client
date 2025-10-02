import ArticleDetails from "@/components/ArticleDetails";

const BlogPageDetails = async ({
  params,
}: {
  params: { id: string };
}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${params.id}`, {
    cache: "no-store",
  });

  const { data: article } = await res.json();
    
    return (
        <div>
            <ArticleDetails article={article}/>
        </div>
    );
};

export default BlogPageDetails;

