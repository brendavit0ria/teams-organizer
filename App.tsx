import { ThemeProvider } from "styled-components";

import theme from "./src/theme/theme";

import { Groups } from "@screens/Groups/Groups";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
}
