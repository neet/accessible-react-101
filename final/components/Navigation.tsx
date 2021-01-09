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
    <div className="flex items-center space-x-8">
      {items.map((item, i) => (
        <Item key={`${item.name}-${i}`} {...item} />
      ))}
    </div>
  );
};
