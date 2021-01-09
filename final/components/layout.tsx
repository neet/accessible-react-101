import Head from "next/head";
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useRef } from "react";
import { Banner } from "./banner";

export interface LayoutProps {
  readonly title: string;
  readonly description: string;
  readonly children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { title, description, children } = props;

  const ref = useRef<HTMLElement | null>(null);

  const handleSkip = () => {
    ref.current?.focus();
  }

  return (
    <div id="app">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <button onClick={handleSkip} className="sr-only focus:not-sr-only">本文へスキップ</button>
      <Banner />

      <main aria-label={title} tabIndex={-1} ref={ref} className="max-w-screen-md m-auto">
        {children}
      </main>

      <div aria-atomic aria-live="assertive" className="sr-only">
        {title}を閲覧中
      </div>
    </div>
  )
}
