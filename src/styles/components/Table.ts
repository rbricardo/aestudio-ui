import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;

  table {
    border: 3px solid ${(props) => props.theme.colors.primary};
    width: 80%;
  }

  th {
    color: ${(props) => props.theme.colors.primary};
    padding: 5px;
  }

  td {
    /* text-align: center; */
    font-size: 14px;
    padding: 5px;
  }

  h1 {
    font-size: 30px;
    color: ${(props) => props.theme.colors.text};
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
  color: ${(props) => props.theme.colors.primary};
`

export const TableButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-between;
`

export const TableButton = styled.div`
  margin-top: 10px;
  display: flex;
  width: 200px;
  height: 30px;
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const PageText = styled.span`
  font-weight: bold;
  font-size: 16;
  margin-top: 10px;
`
