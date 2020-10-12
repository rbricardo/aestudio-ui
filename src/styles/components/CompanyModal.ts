import styled from 'styled-components';

export const Container = styled.div`
  width: 30vw;
  height: 30vh;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 20px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 30px;
    color: ${props => props.theme.colors.text};
    margin-top: 20px;
  }

  p {
    margin-top: 14px;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
  }
`
export const InfoContent = styled.div`
  display: flex;
  flex-direction: row;
`

export const DivButton = styled.div`
  margin-top: 20px;
  height: 30px;
  width: 100px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.text};
`

export const CloseModalButton = styled.span`
  color: ${props => props.theme.colors.primary};
`
