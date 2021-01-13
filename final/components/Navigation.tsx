import Link from "next/link";
import { useRouter } from "next/router";

type ItemProps = {
  name: string;
  href: string;
};

const Item = ({ name, href }: ItemProps) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a className={`h-min ${router.pathname === href ? "text-purple-500 font-bold" : "text-gray-600"}`}>
        {name}
      </a>
    </Link>
  );
};

type NavigationProps = {
  items: ItemProps[];
};

// 1. Use UL and LI
export const Navigation = ({ items }: NavigationProps) => {
  return (
    <nav aria-labelledby="nav-title">
      <h2 id="nav-title" className="sr-only">
        主要なページ
      </h2>
      
      <ul className="flex items-center space-x-8">
        {items.map((item, i) => (
          <li key={`${item.name}-${i}`}>
            <Item {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
