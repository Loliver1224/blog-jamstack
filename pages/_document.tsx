import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import React from "react";
// @ts-ignore
import bundlecss from "!raw-loader!../styles/bundle.css";

// cf. https://zenn.dev/dl10yr/articles/582fd609078cea

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            dangerouslySetInnerHTML={{
              __html: bundlecss,
            }}
          />
        </>
      ),
    };
  }

  render() {
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

export default MyDocument;
