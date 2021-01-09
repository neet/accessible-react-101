import { Header } from "../components/Header";
import { Layout } from "../components/Layout";

export default function Blog() {
  return (
    <Layout title="ブログ" description="最新の記事の一覧です">
      <h2 className="leading-tight font-semibold text-3xl mt-8">記事</h2>
      <p className="text-gray-500 text-xl font-light">最新の記事の一覧</p>
    </Layout>
  );
}
