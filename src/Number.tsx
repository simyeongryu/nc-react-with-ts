import React, { FunctionComponent } from "react";
import styled from "styled-components";

// styled-components에 ts 적용하는 방법
// interface도 사용 가능하다
const Container = styled.span<{ isBlue: boolean }>`
  color: ${props => (props.isBlue ? props.theme.blueColor : "black")};
`;

interface IProps {
  count: number;
}
// 함수형 컴포넌트에서 props의 type을 지정하는 방법
const Number: FunctionComponent<IProps> = ({ count }) => {
  return <Container isBlue={count > 10}>{count}</Container>;
};

export default Number;
