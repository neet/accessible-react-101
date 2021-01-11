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
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>

      <Header />

      <div className="max-w-screen-md mx-auto">
        {children}
      </div>
    </div>
  )
}
