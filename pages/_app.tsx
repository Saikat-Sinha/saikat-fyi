import type { AppProps } from 'next/app'
import { MantineProvider } from '@mantine/core';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Saikat Sinha</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
    </Head>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'dark',
        colors: {
          dark: [
            '#f2f2f2',
            '#acaebf',
            '#8c8fa3',
            '#666980',
            '#4d4f66',
            '#34354a',
            '#2b2c3d',
            '#1c1c1c',
            '#0c0d21',
            '#01010a',
          ]
        }
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  </>
}
