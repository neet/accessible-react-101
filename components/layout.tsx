import Head from "next/head";
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef } from "react";

export interface LayoutProps {
  readonly title: string;
  readonly description: string;
  readonly children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { title, description, children } = props;

  const ref = useRef<HTMLElement | null>(null);
  const router = useRouter();

  // Focus on main element on route changing
  useEffect(() => {
    const handleRouteChange = (): void => {
      ref.current?.focus();
    }

    router.events.on('routeChangeComplete', handleRouteChange);
    return router.events.off('routeChangeComplete', handleRouteChange);
  }, [])

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <main aria-label={title} ref={ref} tabIndex={-1}>
        {children}
      </main>

      <div aria-atomic aria-live="assertive">
        {title}を閲覧中
      </div>
    </div>
  )
}
