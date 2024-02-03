import { AppProps } from 'next/app'
import '../styles/index.css'
import { ThemeProvider, createTheme, responsiveFontSizes, useTheme } from '@mui/material/styles';
import Header from '../components/header';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from '@mui/material';
import { useState, useMemo, createContext, useContext, useEffect, Fragment } from 'react';
import { useRouter } from 'next/router';
import * as gtag from "../lib/gtag"
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';
import Meta from '../components/meta';
import { DevModeContext } from '../context/DevModeContext';
import { SpeedInsights } from "@vercel/speed-insights/next"

declare module '@mui/material/styles' {
  interface Palette {
    hover: Palette['primary'];
  }
  interface PaletteOptions {
    hover?: PaletteOptions['primary'];
  }
  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
}

export const ColorModeContext = createContext({ toggleColorMode: () => { } });

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          main: '#fff',
        },
        secondary: {
          main: '#16274C',
        },
        background: {
          default: '#fff',
        },
        hover: {
          main: "#f3f3f3",
        },
      }
      : {
        // palette values for dark mode
        primary: {
          main: '#1A1A1A',
        },
        secondary: {
          main: '#fff',
        },
        background: {
          default: '#1A1A1A',
        },
        hover: {
          main: "#313131",
        },
      }),
  },
  typography: {
    fontFamily: [
      'DM_Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});



export default function App({ Component, pageProps }: AppProps) {
  let theme = useTheme();
  const router = useRouter();
  const colorContext = useContext(ColorModeContext);
  const [mode, setMode] = useState<PaletteMode>('light');
  const [devMode, setDevMode] = useState<string>('design');
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  // Update the theme only if the mode changes
  theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  theme = responsiveFontSizes(theme)

  return <div>
    <Script id="google-tag-manager" strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NDQFSGX');`}}
    />
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NDQFSGX"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-Y4XZD9D872" />
    <Script
      id="google-analytics"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `  window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', '${process.env.GTAG_CODE}');
            `
      }}
    />
    <DevModeContext.Provider value={{devMode, setDevMode}}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <nav>
            <Header />
          </nav>
          <Component {...pageProps} />
          <Meta />
          <Analytics />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </DevModeContext.Provider>
  </div>
}
