import { Navigation } from "./Navigation";

// 1. Adding id and aria-labelledby
export const Header = () => {
  return (
    <div className="w-full shadow border-t-4 border-purple-700">
      <div className="flex justify-between align-center max-w-screen-md mx-auto py-2">
        <h1 className="flex-grow font-bold text-2xl leading-tight text-purple-800">
          Portfolio
        </h1>

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
