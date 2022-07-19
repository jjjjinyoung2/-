import React from "react";
import styled from "styled-components";
import App from "./App";

const StyledButton = styled.button`
  background: #8d007f;
  color: white;
  width: 200px;
  height: ${(props) => (props.size === "big" ? "80px" : "40px")};
  border-radius: 4rem;
`;

const Button = ({ color, size, text }) => <StyledButton>CLICK</StyledButton>;

export default Button;
