import styled from "styled-components";
import { LightState } from "../../components/model";

interface ModeProps {
  mode: LightState;
}

export const NotFoundPageBase = styled.div<ModeProps>`
  background-color: ${(props) =>
    props.mode === "light" ? "#fcfcfc" : "#111827"};
  min-height: 100vh;
  text-align: center;

  h1 {
    margin-top: 0;
    padding-top: 10%;
  }
`;

export const NotFoundPageButton = styled.button`
  background-color: #1f2937;
  border: none;
  border-radius: 0.25rem;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  margin: 0 auto;
  padding: 0.75rem 1rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #374151;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
`;
