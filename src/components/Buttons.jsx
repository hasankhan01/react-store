import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  color: var(--mainWhite);
  border: 0;
  border-color: ${props =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transation: all 0.5s ease-in-out;
  &:hover {
    color: ${props => (props.cart ? "var(--mainDark)" : "var(--lightBlue)")};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
