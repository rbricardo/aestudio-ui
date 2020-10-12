import axios from 'axios'

interface CompanyServices {
  url: string
}

class CompanyServices {
  constructor() {
    this.url = 'http://localhost:3333/companies' //localhost
  }

  async getOldestCompany() {
    const url = `${this.url}/oldest`
    const { data } = await axios.get(url)
    return data
  }

  async getCompanyWithMostLocations() {
    const url = `${this.url}/mostLocations`
    const { data } = await axios.get(url)
    return data
  }

  async getCompanies(page) {
    const url = `${this.url}?page=${page}`
    const { data } = await axios.get(url)
    return data
  }
}



export default new CompanyServices
