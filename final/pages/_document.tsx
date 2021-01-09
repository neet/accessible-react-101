import Document, { Html, Head, Main, NextScript } from "next/document";

class CustomDocument extends Document {
  public render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
