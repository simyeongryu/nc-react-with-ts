// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    blueColor: string;
  }
}

// https://styled-components.com/docs/api#typescript
