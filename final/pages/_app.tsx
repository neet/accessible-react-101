import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const handleRouteChange = useCallback(() => {
    const main = document.getElementById('main');
    if (main == null) throw new Error('No main node found');
    main.focus();
  }, [])

  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => router.events.off('routeChangeComplete', handleRouteChange);
  })

  return <Component {...pageProps} />;
}

export default App;
