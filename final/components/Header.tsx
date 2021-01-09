import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <div className="w-full bg-purple-700 text-white">
      <div className="flex justify-between align-center max-w-screen-md mx-auto py-2">
        <h1 className="flex-grow font-bold text-2xl leading-tight">Portfolio</h1>

        <Navigation
          items={[
            { name: "ホーム", href: "/" },
            { name: "記事", href: "/blog" },
          ]}
        />
      </div>
    </div>
  );
};
