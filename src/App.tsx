import React, { Component } from "react";
import Number from "./Number";
import { Form, Input } from "./Input";
// interface의 이름 첫 글자는 대문자 I로 시작하는 게 좋다.
interface IState {
  counter: number;
  name: string;
}
// Component에 마우스를 올리면
// P=props, S=state
// <> 안에 각각을 지정해줄 수 있다.
class App extends Component<{}, IState> {
  state = {
    counter: 0,
    name: ""
  };
  render() {
    const { counter, name } = this.state;
    return (
      <div>
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange} />
        </Form>
        <Number count={counter} />
        <button onClick={this.add}>Add</button>
      </div>
    );
  }
  add = (): void => {
    this.setState(prev => {
      return {
        counter: prev.counter + 1
      };
    });
  };
  // ts에서 이벤트의 타입
  // <> 안의 것은 해당 이벤트의 target 요소
  onChange = (e: React.SyntheticEvent<HTMLInputElement>): void => {
    console.log(e.target);
  };
  onFormSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };
}

export default App;
