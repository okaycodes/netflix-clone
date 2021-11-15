import styled from "styled-components"

export const Container = styled.div`

`;

export const Message = styled.p`

`;

export const Wrapper = styled.div`

`;


export const Placeholder = styled.label`
  display: none;
`;

export const Input = styled.input`
  --width: 400px;
  font-size: 16px;
  margin: 0;
  width: var(--width);
  height: 50px;
  position: relative;

  &:focus::placeholder{
    font-size: 0;
  }

  &:focus + ${Placeholder},
  &:not(:placeholder-shown) + ${Placeholder}{
    display: inline-block;
    font-size: 12px;
    color: grey;
    transform: translate(-395px, -16px);
    margin: 0;
    user-select: none;
  }
`;

export const Button = styled.button`

`;
