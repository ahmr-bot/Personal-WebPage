import { useMediaQuery } from '@mui/material';
import {
  DocumentHeadTags,
  DocumentHeadTagsProps,
  documentGetInitialProps,
} from '@mui/material-nextjs/v14-pagesRouter';
import { DocumentContext, DocumentProps, Head, Html, Main, NextScript } from 'next/document';
import { darkTheme, lightTheme, roboto } from '../src/theme';


export default function MyDocument(props: DocumentProps & DocumentHeadTagsProps) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = prefersDarkMode ? darkTheme : lightTheme
  return (
    <Html lang="en" className={roboto.className}>
      <Head>
        {/* PWA primary color */}
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="emotion-insertion-point" content="" />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};
