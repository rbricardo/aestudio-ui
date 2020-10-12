import React from 'react'
import {
  Container,
  TableButtonsDiv,
  TableButton,
  PageText
} from '../styles/components/Table'
import CompanyServices from '../services/companies'
const Table = () => {
  const [companies, setCompanies] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [page, setPage] = React.useState(null)
  React.useEffect(() => {
    async function getCompaniesByPage() {
      setIsLoading(true)
      const companiesData = await CompanyServices.getCompanies(1)
      const { docs, currentPage, lastPage, totalPerPage } = companiesData
      setCompanies(docs)
      setPage({ currentPage, lastPage, totalPerPage })
      setIsLoading(false)
    }
    getCompaniesByPage()
  }, [])

  async function onNextPage() {
    if (page?.currentPage === page?.lastPage) return
    setIsLoading(true)
    const companiesData = await CompanyServices.getCompanies(
      page.currentPage + 1
    )
    const { docs, currentPage, lastPage, totalPerPage } = companiesData
    setCompanies(docs)
    setPage({ currentPage, lastPage, totalPerPage })
    setIsLoading(false)
  }

  async function onPrevPage() {
    if (page?.currentPage === 1) return
    setIsLoading(true)
    const companiesData = await CompanyServices.getCompanies(
      page.currentPage - 1
    )
    const { docs, currentPage, lastPage, totalPerPage } = companiesData
    setCompanies(docs)
    setPage({ currentPage, lastPage, totalPerPage })
    setIsLoading(false)
  }
  return (
    <Container>
      {isLoading ? (
        <p style={{ color: 'white' }}>Loading table...</p>
      ) : (
        <>
          <table>
            <tr>
              <th>Business Name</th>
              <th>Street Address</th>
              <th>City</th>
              <th>Zip Code</th>
            </tr>
            {companies?.map((company) => (
              <tr>
                <td>{company.business_name}</td>
                <td>{company.street_address}</td>
                <td>{company.city}</td>
                <td>{company.zip_code}</td>
              </tr>
            ))}
          </table>
          <TableButtonsDiv>
            <TableButton
              style={page?.currentPage === 1 ? { backgroundColor: 'grey' } : {}}
              onClick={onPrevPage}
            >
              <span>PREV</span>
            </TableButton>
            <PageText>Page {page?.currentPage}</PageText>
            <TableButton
              style={page?.currentPage === page?.lastPage ? { backgroundColor: 'grey' } : {}}
              onClick={onNextPage}
            >
              <span>NEXT</span>
            </TableButton>
          </TableButtonsDiv>
        </>
      )}
    </Container>
  )
}

export default Table
