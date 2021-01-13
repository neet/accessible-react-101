import Head from 'next/head';
import { ReactNode } from "react"
import { Header } from "./Header"

export interface LayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

export const Layout = ({ title, description, children }: LayoutProps) => {
  return (
    <div id="app">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      
      <a href="#main" className="sr-only focus:not-sr-only">
        本文にスキップ
      </a>

      <Header />

      <main id="main" tabIndex={-1} aria-label="メイン" className="max-w-screen-md mx-auto">
        {children}
      </main>

      <div
        aria-atomic
        aria-live="assertive"
        className="sr-only"
      >
        {title}を閲覧中
      </div>
    </div>
  )
}
