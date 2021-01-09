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
      <a className={`h-min ${router.pathname === href ? "font-bold" : ""}`}>
        {name}
      </a>
    </Link>
  );
};

type NavigationProps = {
  items: ItemProps[];
};

export const Navigation = ({ items }: NavigationProps) => {
  return (
    <nav aria-labelledby="navigation-title">
      <h2 id="navigation-title" className="sr-only">
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
