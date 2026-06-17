import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  },
  colors: {
    brand: {
      50: "#e6f7ff",
      100: "#b3e7ff",
      200: "#80d6ff",
      300: "#4dc4ff",
      400: "#1ab2ff",
      500: "#0098e6",
      600: "#0077b4",
      700: "#005682",
      800: "#003551",
      900: "#001621",
    },
    bg: {
      base: "#0a0e1a",
      surface: "#111827",
    },
  },
  styles: {
    global: {
      "html, body": {
        bg: "#0a0e1a",
        color: "whiteAlpha.900",
        scrollBehavior: "smooth",
      },
      "::selection": {
        background: "rgba(26, 178, 255, 0.3)",
      },
      "*::-webkit-scrollbar": {
        width: "10px",
      },
      "*::-webkit-scrollbar-track": {
        background: "#0a0e1a",
      },
      "*::-webkit-scrollbar-thumb": {
        background: "rgba(123, 97, 255, 0.5)",
        borderRadius: "8px",
      },
    },
  },
});

export default theme;
