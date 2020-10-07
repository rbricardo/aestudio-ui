import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
        <h1>Ae Studio</h1>
        <p>Challenge</p>
    </Container>
  )
}

export default Home
