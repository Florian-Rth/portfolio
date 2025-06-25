"use client";
import React, { forwardRef } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import NextLink from "next/link";
import { LinkProps as NextLinkProps } from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ThemeContext = React.createContext(null);

interface LinkBehaviourProps extends NextLinkProps {
  ref?: React.Ref<HTMLAnchorElement>;
}

// https://stackoverflow.com/questions/66226576/using-the-material-ui-link-component-with-the-next-js-link-component/74419666#74419666
const LinkBehaviour = forwardRef<
  HTMLAnchorElement,
  LinkBehaviourProps
>(function LinkBehaviour(props, ref) {
  return <NextLink ref={ref} {...props} />;
});

const ThemeRegistry: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const theme = createTheme({
    cssVariables: {
      colorSchemeSelector: "class",
      disableCssColorScheme: true,
    },
    colorSchemes: {
      light: true,
      dark: true,
    },
    typography: {
      fontFamily: inter.style.fontFamily,
    },
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehaviour,
        },
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehaviour,
        },
      },
    },
  });

  return (
    <ThemeContext.Provider value={null}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeRegistry;
