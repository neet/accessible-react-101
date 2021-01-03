import { NextPage } from "next";
import Link from 'next/link';
import { Layout } from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="ホーム" description="ホーム画面です">
      <h1 className="text-3xl leading-relaxed font-semibold">ホーム</h1>
      <span>ようこそ</span>

      <Link href="/profile">
        <a className="text-blue-500 hover:underline">
          プロフィールはこちら
        </a>
      </Link>
    </Layout>
  )
}

export default Home;
