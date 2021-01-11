import Link from "next/link";
import { Layout } from "../components/Layout";

export default function Blog() {
  return (
    <Layout title="ブログ" description="最新の記事の一覧です">
      <span className="leading-tight font-semibold text-3xl mt-8">記事</span>
      <span className="text-gray-500 text-xl font-light">最新の記事の一覧</span>

      <Link href="/">
        <a className="text-purple-500 underline">
          ホームに戻る
        </a>
      </Link>
    </Layout>
  );
}
