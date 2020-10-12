import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;

  table {
    border: 3px solid ${props => props.theme.colors.primary};
    width: 80%;

  }

  th {
    color: ${props => props.theme.colors.primary};
  }

  td {
    text-align: center;
  }

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

export const CloseModalButton = styled.span`
  color: ${props => props.theme.colors.primary};
`
