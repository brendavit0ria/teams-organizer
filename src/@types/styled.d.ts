import "styled-components/native";
import theme from "../theme/theme";

declare module "styled-components" {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
