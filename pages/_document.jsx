import Document, { Html, Main, Head, NextScript } from "next/document";
import Meta from "../utils/meta";
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Meta />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
