import { Header } from "../components/Header";
import { ProfileButton } from "../components/ProfileButton";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="max-w-screen-md mx-auto">
        <div className="flex space-x-4 items-center mx-auto my-8">
          <div>
            <img src="/avatar.png" className="shadow-inner w-32 rounded-full" />
          </div>

          <div>
            <h2 className="leading-tight font-semibold text-3xl">ボブ</h2>
            <p className="text-gray-500">Webエンジニア・デザイナー</p>
            <ProfileButton />
          </div>
        </div>
      </div>
    </div>
  );
}
