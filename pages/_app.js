import "tailwindcss/tailwind.css";
import "../styles.css";
import { useEffect } from "react";
import * as ga from "../lib/ga";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AppBar from "../components/AppBar";
import { Provider } from "react-redux";
import { store } from "../store";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import firebase from "firebase/app";
import { firebaseCloudMessaging } from "../utils/webPush";

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

  useEffect(() => {
    setToken();
    // this is working
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener("message", (event) =>
        console.log("event for the service worker", event)
      );
    }
    async function setToken() {
      try {
        const token = await firebaseCloudMessaging.init();
        if (token) {
          console.log("token", token);
          // not working
          getMessage();
        }
      } catch (error) {
        console.log(error);
      }
    }
  });

  function getMessage() {
    console.log("message functions");
    const messaging = firebase.messaging();
    messaging.onMessage((message) => console.log("foreground", message));
  }

  return (
    <>
      <ThemeProvider attribute="class">
        <Provider store={store}>
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
            />
          </Head>

          <div className="flex flex-col items-center dark:bg-gray-900 bg-gray-50 justify-start min-h-screen">
            <Header />
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
            <Footer />
            <div className="pt-10">
              <AppBar />
            </div>
          </div>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
