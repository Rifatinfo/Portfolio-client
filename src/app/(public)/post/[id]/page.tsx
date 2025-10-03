import ArticleDetails from "@/components/ArticleDetails";
interface IPost{
  id : string
}

export const generateStaticParams = async  () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
  const { data: article } = await res.json();
  return article.map((post : IPost) => ({
    id: String(post.id),
  }))
}

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${params.id}`);
  const { data: article } = await res.json();
   
  return {
     title : article?.title,
     description : article?.description
  }
}

const BlogPageDetails = async ({
  params,
}: {
  params: { id: string };
}) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${params.id}`);

  const { data: article } = await res.json();
    
    return (
        <div>
            <ArticleDetails article={article}/>
        </div>
    );
};

export default BlogPageDetails;
