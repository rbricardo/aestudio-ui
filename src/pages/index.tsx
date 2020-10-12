import React from 'react'
import Head from 'next/head'
import { Container, DivButton, TextButton, ButtonsContent } from '../styles/pages/Home'
import CompanyServices from '../services/companies'
import CompanyModal from '../components/CompanyModal'
import Table from '../components/Table'

const Home: React.FC = () => {
  const [companyWithMostLocations, setCompanyWithMostLocations] = React.useState(null)
  const [oldestCompany, setOldestCompany] = React.useState(null)
  const [showOldestCompany, setShowOldestCompany] = React.useState(false)
  const [showCompanyWithMostLocations, setShowCompanyWithMostLocations] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  React.useEffect(() => {

    async function getCompanies() {
      setIsLoading(true)
      const dataOldestCompany = await CompanyServices.getOldestCompany()
      const dataCompanyWithMostLocation = await CompanyServices.getCompanyWithMostLocations()
      setOldestCompany(dataOldestCompany)
      setCompanyWithMostLocations(dataCompanyWithMostLocation)
      setIsLoading(false)
    }

    getCompanies()
  }, [])

  async function toggleOldestCompanyModal() {
    setShowOldestCompany(!showOldestCompany)
  }

  async function toggleCompanyWithMostLocationsModal() {
    setShowCompanyWithMostLocations(!showCompanyWithMostLocations)
  }

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>Ae Studio Challenge</h1>
      {isLoading ? <p>Loading...</p> :
        <>
          <ButtonsContent>
            <DivButton style={{ marginRight: 10 }} onClick={toggleOldestCompanyModal}>
              <TextButton>Oldest Company</TextButton>
            </DivButton>
            <DivButton style={{ marginLeft: 10 }} onClick={toggleCompanyWithMostLocationsModal}>
              <TextButton>Company With Most Locations</TextButton>
            </DivButton>
          </ButtonsContent>
          {showOldestCompany &&
            <CompanyModal
              type="oldest"
              closeModal={toggleOldestCompanyModal}
              companyName={oldestCompany.business_name}
              companyInfo={oldestCompany.location_start_date.slice(0, 10)}
            />
          }
          {showCompanyWithMostLocations &&
            <CompanyModal
              type="mostLocations"
              closeModal={toggleCompanyWithMostLocationsModal}
              companyName={companyWithMostLocations.name}
              companyInfo={companyWithMostLocations.qty}
            />
          }
          <Table />
        </>
      }
    </Container>
  )
}

export default Home
