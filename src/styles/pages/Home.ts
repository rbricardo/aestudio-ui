import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`

export const DivButton = styled.div`
  height: 30px;
  width: 300px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.text};
`

export const TextButton = styled.span`
  color: ${props => props.theme.colors.primary};
`

export const ButtonsContent = styled.div`
  display: flex;
  flex-direction: row;
`
