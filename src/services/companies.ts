import axios from 'axios'

interface Company {
  business_name: string
  city: string
  location_1: {
    latitude: string
    longitude: string
  }
  location_account: string
  location_description: string
  location_start_date: string
  naics: string
  primary_naics_description: string
  street_address: string
  zip_code: string
}

interface CompanyWithMostLocations {
  name: string
  qty: number
}

class CompanyServices {
  private url = 'http://localhost:3333/companies'

  async getOldestCompany(): Promise<Company> {
    const url = `${this.url}/oldest`
    const { data } = await axios.get(url)
    return data
  }

  async getCompanyWithMostLocations(): Promise<CompanyWithMostLocations> {
    const url = `${this.url}/mostLocations`
    const { data } = await axios.get(url)
    return data
  }

  async getCompanies(page: number): Promise<Company> {
    const url = `${this.url}?page=${page}`
    const { data } = await axios.get(url)
    return data
  }
}

export default new CompanyServices()
