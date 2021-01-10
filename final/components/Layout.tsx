import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import Head from "next/head";
import { Header } from "./Header";

export interface LayoutProps {
  readonly title: string;
  readonly description: string;
  readonly children: ReactNode;
}

export const Layout = (props: LayoutProps) => {
  const { title, description, children } = props;

  const main = useRef<HTMLDivElement | null>(null);

  return (
    <div id="app">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <div className="sr-only focus-within:not-sr-only">
        <a href="#main" className="fixed top-0 left-0 bg-white shadow-sm text-purple-700">
          本文へスキップ
        </a>
      </div>

      <Header />

      <main
        id="main"
        className="max-w-screen-md mx-auto p-2"
        ref={main}
        tabIndex={-1}
        aria-label={title}
      >
        {children}
      </main>

      <div aria-atomic aria-live="assertive" className="sr-only">
        <p>{title}を閲覧中</p>
      </div>
    </div>
  );
};
