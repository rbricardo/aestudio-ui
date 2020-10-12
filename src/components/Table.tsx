import React from 'react'
import { Container } from '../styles/components/Table'
import CompanyServices from '../services/companies'
const Table = () => {
  const [companies, setCompanies] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  React.useEffect(() => {
    async function getCompaniesByPage() {
      setIsLoading(true)
      const companiesData = await CompanyServices.getCompanies(3)
      setCompanies(companiesData.docs)
      setIsLoading(false)
    }
    getCompaniesByPage()
  }, [])
  return (
    <Container>
      {isLoading ? <p style={{ color: 'white' }}>Loading table...</p> :
        <table>
          <tr>
            <th>Business Name</th>
            <th>Street Address</th>
            <th>City</th>
            <th>Zip Code</th>
          </tr>
          {companies?.map(company => (
            <tr>
              <td>{company.business_name}</td>
              <td>{company.street_address}</td>
              <td>{company.city}</td>
              <td>{company.zip_code}</td>
            </tr>
          ))
          }

        </table>
      }

    </Container>
  )
}

export default Table
