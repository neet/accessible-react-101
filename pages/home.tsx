import { NextPage } from "next";
import Link from 'next/link';
import { Layout } from "../components/layout";

const Home: NextPage = () => {
  return (
    <Layout title="ホーム" description="ホーム画面です">
      <h1>ホーム</h1>
      <span>ようこそ</span>

      <Link href="/profile">
        <a style={{ color: 'blue' }}>
          プロフィール
        </a>
      </Link>
    </Layout>
  )
}

export default Home;
