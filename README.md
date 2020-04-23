# nc-react-with-ts

```shell
$ yarn create react-app 프로젝트이름 --typescript
```

create-react-app 은 이미 ts를 사용할 준비가 되어있기 때문에 --typescript를 붙여서 ts로 프로젝트를 만든다고 알려주기만 한다.

## tsconfig

typescript의 규칙을 명시해놓는 문서

## definitelyTyped

일반적인 리액트 라이브러리들은 타입스크립트가 이해할 수 없다. 

따라서 라이브러리를 설치할 때 `@types/`를 붙여서 설치하자.

```shell
$ yarn add @types/styled-components
```
> definitelytyped 검색해서 들어가면 어떤 라이브러리가 ts로 번역(?)되어있는지 알 수 있다.

## styled-components theme with ts

theme.ts
```ts
export default {
  blueColor: "red"
};
```

index.tsx 에 
```ts
import { ThemeProvider } from "styled-components";
import theme from "./theme";
```
추가하고 아래와 같이 코드 작성
```ts
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
```
styled.d.ts 라는 파일을 생성하고 아래와 같이 작성
```ts
// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    blueColor: string;
  }
}

// https://styled-components.com/docs/api#typescript
```