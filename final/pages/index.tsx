import { Header } from "../components/Header";
import { Layout } from "../components/Layout";
import { ProfileButton } from "../components/ProfileButton";

export default function Home() {
  return (
    <Layout title="ホーム" description="私の概略とポートフォリオです">
      <section
        aria-labelledby="biography-heading"
        className="flex space-x-4 items-center mx-auto my-8"
      >
        <div>
          <img
            alt="私の顔写真"
            src="/avatar.png"
            className="shadow-inner w-32 rounded-full"
          />
        </div>

        <div>
          <h2 id="biography-heading" className="sr-only">
            概略
          </h2>
          <span className="leading-tight font-semibold text-3xl">ボブ</span>
          <p className="text-gray-500">Webエンジニア・デザイナー</p>
          <ProfileButton />
        </div>
      </section>
    </Layout>
  );
}
