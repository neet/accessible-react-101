import Link from "next/link"

export const Banner = () => {
  return (
    <header className="bg-blue-900 text-white p-2">
      <div className="flex justify-between m-auto max-w-screen-md">
        <h1 className="text-2xl font-bold">My website</h1>

        <nav aria-label="主要なページ">
          <ul className="flex space-x-8">
            <li>
              <Link href="/home">
                <a className="focus:underline">ホーム</a>
              </Link>
            </li>

            <li>
              <Link href="/profile">
                <a className="focus:underline">プロフィール</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
