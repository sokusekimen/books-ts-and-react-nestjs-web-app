import Document, { DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

// Documentを上書きし、スタイルを差し込む
export default class MyDocument extends Document {
  // Rubyでいうクラスメソッド
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
              sheet.collectStyles(<App {...props} />)
        });

      // 初期値を流用
      const initialProps = await Document.getInitialProps(ctx);

      // initialPropsに加え、Styleを追加して返す
      return {
        ...initialProps,
        styles: [
          initialProps.styles,
          // styled-componentsのstyle
          sheet.getStyleElement(),
        ],
      }
    } finally {
      sheet.seal();
    }
  }
}