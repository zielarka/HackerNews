"use client";
import { Article } from "~/Interfaces/Article";
import { useEffect, useState } from "react";
import Link from 'next/link';

const HACKER_NEWS_API = process.env.NEXT_PUBLIC_HACKER_NEWS_API;
async function fetchArticles(page: number = 1, pageSize: number = 10): Promise<Article[]> {
  try {
    const url = `${HACKER_NEWS_API}/topstories.json`
    const response = await fetch(url);
    const newStoryIds: number[] = await response.json();
    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    const articlePromises = newStoryIds.slice(start, end).map(async (storyId, index) => {
      const storyUrl = `${HACKER_NEWS_API}/item/${storyId}.json`
      const storyResponse = await fetch(storyUrl);
      const storyDetails = await storyResponse.json();
      storyDetails.index = start + index + 1;
      return storyDetails;
    });

    const articleDetails = await Promise.all(articlePromises);
    return articleDetails;
  } 
  catch (error) {
    console.error('Error fetching new stories:', error);
    return [];
  }

}

const HackerNews = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const urlHackerNews = `${HACKER_NEWS_API}/newstories.json`

  useEffect(() => {
    const loadArticles = async () => {
      setLoading(true);
      const newArticles = await fetchArticles(page, 10);
      setArticles(newArticles);
      const response = await fetch(urlHackerNews);
      const newStoryIds: number[] = await response.json();
      setTotalPages(Math.ceil(newStoryIds.length / 10));
      setLoading(false);
    };

    loadArticles();
  }, [page]);

  const handlePreviousPage = () => {
    if (!loading && page > 1) {
      setPage((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleNextPage = () => {
    if (!loading && page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-xl">
      <h1 className="text-center text-2xl font-bold mb-4">Hacker News Latest Articles</h1>
      <p className="text-center mb-4">Page: {page} of {totalPages}</p>
      <ul className="list-none p-0">
        {articles.map((article) => (
          <li key={article.index} className="mb-2">
            <Link href={`/article/${article.id}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              {article.index}. {article.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mt-4">
        <button
          onClick={handlePreviousPage}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${loading || page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading || page === 1}
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className={`px-4 py-2 bg-blue-500 text-white rounded ${loading || page === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading || page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HackerNews;
