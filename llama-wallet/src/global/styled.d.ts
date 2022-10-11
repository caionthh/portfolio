import "styled-components";

import LightTheme from "./light.theme";

declare module "styled-components" {
  type ThemeType = typeof LightTheme

  export interface DefaultTheme extends ThemeType { }
}
