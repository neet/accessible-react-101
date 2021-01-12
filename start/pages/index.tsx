import Link from "next/link";
import { Layout } from "../components/Layout";
import { ProfileButton } from "../components/ProfileButton";

export default function Home() {
  return (
    <Layout title="ホーム" description="私のポートフォリオです">
      <div className="flex space-x-4 items-center mx-auto my-8">
        <div>
          <img src="/avatar.png" className="shadow-inner w-32 rounded-full" />
        </div>

        <div>
          <span className="leading-tight font-semibold text-3xl">ボブ</span>
          <div className="text-gray-500">Webエンジニア・デザイナー</div>
          <ProfileButton />
        </div>
      </div>

      <p>私のポートフォリオへようこそ</p>

      <Link href="/blog">
        <a className="text-purple-500 underline">記事の一覧</a>
      </Link>
    </Layout>
  );
}
