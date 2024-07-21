'use client';

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Article } from '~/Interfaces/Article';

const HACKER_NEWS_API = process.env.NEXT_PUBLIC_HACKER_NEWS_API;
const fetchArticle = async (id: number): Promise<Article | null> => {
  const url = `${HACKER_NEWS_API}/item/${id}.json`;

  try {
    const response = await fetch(url);
    const article = await response.json();
    return article;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
};

const ArticlePage = () => {
  const { id } = useParams();
  const articleId = parseInt(id as string, 10);
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    const loadArticle = async () => {
      const fetchedArticle = await fetchArticle(articleId);
      setArticle(fetchedArticle);
    };

    loadArticle();
  }, [articleId]);

  if (!article) {
    return <div className="container mx-auto p-4 max-w-xl">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-xl">
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-600 mb-2">By {article.by} on {new Date(article.time * 1000).toLocaleDateString()}</p>
      {article.text && <div className="prose mb-4" dangerouslySetInnerHTML={{ __html: article.text }} />}
      <Link href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
        Read more
      </Link>
      <div className="mt-4">
        <Link href="/" className="text-blue-500 underline">Back to home</Link>
      </div>
    </div>
  );
};

export default ArticlePage;