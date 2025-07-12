import { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";
import newsData from "../data/newsData.json";

export default function Home() {
  const [currentNews, setCurrentNews] = useState(null);

  useEffect(() => {
    // 模拟加载第一条新闻
    setCurrentNews(newsData[0]);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      {currentNews ? (
        <NewsCard news={currentNews} />
      ) : (
        <p className="text-center mt-10">Loading...</p>
      )}
    </div>
  );
}
