import { Layout } from "../components/Layout";
import { ProfileButton } from "../components/ProfileButton";

export default function Home() {
  return (
    <Layout title="ホーム" description="私のポートフォリオです">
      <div className="flex space-x-4 items-center mx-auto my-8">
        <div>
          <img
            src="/avatar.png"
            alt="私の写真です"
            className="shadow-inner w-32 rounded-full"
          />
        </div>

        <div>
          <h2 className="leading-tight font-semibold text-3xl">ボブ</h2>
          <p className="text-gray-500">Webエンジニア・デザイナー</p>
          <ProfileButton />
        </div>
      </div>
    </Layout>
  );
}
