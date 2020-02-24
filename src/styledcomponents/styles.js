import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${props =>
    props.wrapper &&
    css`
      max-width: 600px;
      margin: auto;
      padding: 0.5rem 1rem;
      background-color: lightblue;
      border-radius: 10px;
      box-shadow: 5px 5px 5px grey;
    `}
  ${props =>
    props.emptyList &&
    css`
      background-color: #666;
      color: #fff;
      border-radius: 10px;
      box-shadow: 5px 5px 5px grey;
      text-align: center;
      padding: 1.5rem;
      margin: 1rem 0;
    `}
`;

export const MainHeader = styled.h1`
  ${props =>
    props.mainHeader &&
    css`
      text-align: center;
      background-color: #666;
      color: #fff;
      padding: 2rem 5rem;
      border-radius: 6px;
    `}
`;

export const StyledTodo = styled.p`
  background-color: #f4f4f4;
  padding: 0.5rem 1rem;
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
`;

export const Button = styled.button`
  background-color: ${props => {
    if (props.delete) {
      return "red";
    } else if (props.edit) {
      return "green";
    } else {
      return "grey";
    }
  }};
  border: none;
  border-radius: 20px;
  float: ${props => (props.submit ? "none" : "right")};
  color: #fff;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  margin: 0 0.2rem;
`;

export const AddInput = styled.input`
  ${props =>
    props.type === "text" &&
    css`
      padding: 0.5rem 1rem;
      width: 50%;
    `}
`;

export const Navbar = styled.span`
  ${props =>
    props.navbar &&
    css`
      display: inline-block;
      padding: 0.5rem 0.8rem;
      text-decoration: none;
      margin: auto;
    `}
`;

export const MainNav = styled.nav`
  text-align: center;
`;

export const Status = styled.span`
  text-align: center;
  padding: 1rem 2rem;
  margin: 1rem;
  background-color: #00aa66;
  color: #fff;
  display: block;
  font-size: 26px;
`;
