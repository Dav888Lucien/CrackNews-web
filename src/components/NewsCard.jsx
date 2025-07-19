export default function NewsCard({ news }) {
  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <img
        src={news.imageUrl}
        alt="cover"
        className="w-full rounded aspect-video object-cover"
      />
      <p className="text-sm text-gray-500 mt-2">
        {news.source} · {news.publishedAt}
      </p>
      <h1 className="text-2xl font-bold mt-4">{news.title}</h1>
      {news.summary.map((para, idx) => (
        <p key={idx} className="mt-4 text-base leading-relaxed">
          {para}
        </p>
      ))}
    </div>
  );
}