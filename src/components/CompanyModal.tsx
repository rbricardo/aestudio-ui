import React from 'react'
import { Container, InfoContent, CloseModalButton, DivButton } from '../styles/components/companyModal'

const CompanyModal = ({ closeModal, companyName, companyInfo, type }) => {
  return (
    <Container>
      <h1>{companyName}</h1>
      <InfoContent>
        <p>{companyInfo}</p>
        <p style={{ marginLeft: '5px' }}>{type === 'mostLocations' && 'times'}</p>
      </InfoContent>
      <DivButton onClick={() => closeModal(false)}>
        <CloseModalButton>Close</CloseModalButton>
      </DivButton>
    </Container>
  )
}

export default CompanyModal
