import "tailwindcss/tailwind.css";
import "../styles.css";
import { useEffect } from "react";
import * as ga from "../lib/ga";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import { store } from "../store";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Provider store={store}>
      <AnimatePresence exitBeforeEnter>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          />
        </Head>

        <div className="flex flex-col items-center bg-gray-50 justify-start min-h-screen">
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
