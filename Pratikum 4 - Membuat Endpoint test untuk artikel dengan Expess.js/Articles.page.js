import { getArticles } from "./services/getarticles";

export default async function ArticlesPage() {
    const articles = await getArticles()

    return (
        <div className="p-4">
            <h1 className="text-x1 font-bold mb-4">Daftar Artikel</h1>
            <ul className="space-y-2">
                {articles.map((article) => ( 
                    <li key={article.id} className="border p-3 rounded">
                        <h2 className="font-semibold">{article.title}</h2>
                        <img src={article.urlimage} alt={article.title} className="w-40 my-2" />
                        <p>{article.description}</p>
                        <small className="text-gray-500">By: {article.author}</small>
                        </li>
                ))}
            </ul>
        </div>
    );
}