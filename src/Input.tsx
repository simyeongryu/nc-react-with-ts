import React from "react";
import styled from "styled-components";

interface IInputProps {
  value: string;
  // 함수 props를 정해주는 방법
  onChange: (e: React.SyntheticEvent<HTMLInputElement>) => void;
  // onChange: (e: React.ChangeEvent) => void;
}

interface IFormProps {
  onFormSubmit: (e: React.FormEvent) => void;
}

export const Input: React.FunctionComponent<IInputProps> = ({ value, onChange }) => (
  <input type="text" placeholder="Name" value={value} onChange={onChange} />
);

export const Form: React.FunctionComponent<IFormProps> = ({ children, onFormSubmit }) => (
  <form onSubmit={onFormSubmit}>{children}</form>
);
