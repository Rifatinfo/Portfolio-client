import ArticleDetails from "@/components/ArticleDetails";
interface IPost{
  id : string
}

export const generateStaticParams = async  () => {
  const res = await fetch(`https://portfolio-puce-six-73.vercel.app/api/post`);
  const { data: article } = await res.json();
  return article.map((post : IPost) => ({
    id: String(post.id),
  }))
}

export const generateMetadata = async ({
  params,
}: {
  // params: { id: string };
  params: Promise<{ id: string }>
}) => {
  const { id } = await params;
  const res = await fetch(`https://portfolio-puce-six-73.vercel.app/api/post/${id}`);
  const { data: article } = await res.json();
   
  return {
     title : article?.title,
     description : article?.description
  }
}

const BlogPageDetails = async ({
  params,
}: {
    // params: { id: string };

  params: Promise<{ id: string }>
}) => {
  const { id } = await params;
  const res = await fetch(`https://portfolio-puce-six-73.vercel.app/api/post/${id}`);
  // const res = await fetch(`https://portfolio-puce-six-73.vercel.app/api/post/${params.id}`);

  const { data: article } = await res.json();
    
    return (
        <div>
            <ArticleDetails article={article}/>
        </div>
    );
};

export default BlogPageDetails;
