import { Header } from "../components/Header";

export default function Blog() {
  return (
    <div>
      <Header />

      <div className="max-w-screen-md mx-auto">
        <h2 className="leading-tight font-semibold text-3xl mt-8">記事</h2>
        <p className="text-gray-500 text-xl font-light">最新の記事の一覧</p>
      </div>
    </div>
  );
}
