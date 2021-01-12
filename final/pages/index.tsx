import Link from "next/link";
import { Layout } from "../components/Layout";
import { ProfileButton } from "../components/ProfileButton";

export default function Home() {
  return (
    <Layout title="ホーム" description="私のポートフォリオです">
      <div className="flex space-x-4 items-center mx-auto my-8">
        <div>
          <img src="/avatar.png" alt="私の笑顔の写真" className="shadow-inner w-32 rounded-full" />
        </div>

        <div>
          <h1 className="leading-tight font-semibold text-3xl">ボブ</h1>
          <p className="text-gray-500">Webエンジニア・デザイナー</p>
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
