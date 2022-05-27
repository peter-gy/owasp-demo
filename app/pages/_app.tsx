import '@styles/globals.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionOptions={{
          key: 'mantine',
          /** Loads mantine styles AFTER tailwind, prevents tailwind overwriting mantine CSS */
          prepend: false
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
