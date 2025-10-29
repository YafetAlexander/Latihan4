{articles.map((article) => (

    <li key={article.id} className="border p-3 rounded">
        <Card img={article.urlimage } title={article.urlimage}  desc={article.description } author={article.author }  />
    </li>


))}