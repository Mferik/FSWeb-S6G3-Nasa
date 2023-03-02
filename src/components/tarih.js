import React from "react";
import styled from "styled-components";

const SCinput = styled.input`
  text-transform: uppercase;
  margin-bottom: 15px;
  padding: 12px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: transparent;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease-out, color 0.3s ease-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function Tarih(props) {
  const { değiştirici } = props;

  return (
    <SCinput
      type="date"
      onChange={(event) => değiştirici(event.target.value)}
    />
  );
}
