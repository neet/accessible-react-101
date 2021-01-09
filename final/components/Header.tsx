import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="w-full bg-purple-700 text-white" aria-labelledby="header-title">
      <div className="flex justify-between align-center max-w-screen-md mx-auto py-2">
        <h1
          id="header-title"
          className="flex-grow font-bold text-2xl leading-tight"
        >
          Portfolio
        </h1>

        <Navigation
          items={[
            { name: "ホーム", href: "/" },
            { name: "記事", href: "/blog" },
          ]}
        />
      </div>
    </header>
  );
};
