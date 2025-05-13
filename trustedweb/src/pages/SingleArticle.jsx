import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import * as Icons from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Helmet } from "react-helmet";

const IconFromName = ({ name, className }) => {
  const LucideIcon = Icons[name] || Icons.FileText;
  return <LucideIcon className={className} />;
};

export default function SingleArticle() {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticle();
  }, [slug]);

  const fetchArticle = async () => {
    const { data, error } = await supabase
      .from("articles")
      .select("*, categories(name, icon)")
      .eq("slug", slug)
      .single();

    if (error) {
      console.error("Error fetching article:", error);
    } else {
      setArticle(data);
    }
    setLoading(false);
  };

  if (loading) {
    return <div className="p-10 text-center text-gray-500">Loading...</div>;
  }

  if (!article) {
    return <div className="p-10 text-center text-red-500">Article not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{article.title} | My Website</title>
        <meta name="description" content={article.summary || article.content?.slice(0, 150)} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.summary || article.content?.slice(0, 150)} />
        <meta property="og:image" content={article.image || "default-image.jpg"} />
        <meta property="og:url" content={`https://mywebsite.com/resources/${article.slug}`} />
        <meta property="og:type" content="article" />
      </Helmet>

      <section className="bg-white py-10 px-[4%] md:px-[10%]">
        <div className="max-w-3xl mx-auto">
          <div className="mb-6 text-sm text-gray-500 flex items-center gap-2">
            {article.categories?.icon && (
              <IconFromName name={article.categories.icon} className="w-5 h-5 text-teal-600" />
            )}
            <span>{article.categories?.name}</span>
            <span>•</span>
            <span>{new Date(article.created_at).toLocaleDateString()}</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>

          {article.summary && (
            <p className="text-lg text-gray-600 mb-6">{article.summary}</p>
          )}

          <div className="prose max-w-none prose-teal prose-lg">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {article.content}
            </ReactMarkdown>
          </div>
        </div>
      </section>
    </>
  );
}
