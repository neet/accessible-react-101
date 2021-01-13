import Link from "next/link";
import { Layout } from "../components/Layout";

export default function Blog() {
  return (
    <Layout title="ブログ" description="最新の記事の一覧です">
      <h1 className="leading-tight font-semibold text-3xl mt-8">記事</h1>
      <p className="text-gray-500 text-xl font-light">最新の記事の一覧</p>

      <Link href="/">
        <a className="text-purple-500 underline">ホームに戻る</a>
      </Link>

      <div role="feed" className="divide-y divide-gray-300">
        {Array.from({ length: 3 }, (_, i) => i).map((i, _, a) => (
          <article
            aria-posinset={i}
            aria-setsize={a.length}
            className="py-4"
            aria-labelledby={`article-title-${i}`}
          >
            <h2 id={`article-title-${i}`} className="font-bold text-lg">
              <a href={`article-title-${i}`} className="text-purple-700 hover:underline">
                記事 #{i}
              </a>
            </h2>
            <p className="text-gray-800">
              あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら
            </p>
          </article>
        ))}
      </div>
    </Layout>
  );
}
