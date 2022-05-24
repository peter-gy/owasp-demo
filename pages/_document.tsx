import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class AppDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html className="bg-primary">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <body className="antialiased">
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}