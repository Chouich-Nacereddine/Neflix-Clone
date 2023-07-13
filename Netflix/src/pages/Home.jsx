import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <div>
      <Main/>
      <Row Rowid ='1' title='Up Comming' fetchURL={requests.requestUpcoming} />
      <Row Rowid ='2' title='Popular' fetchURL={requests.requestPopular} />
      <Row Rowid ='3' title='Trending' fetchURL={requests.requestTrending} />
      <Row Rowid ='4' title='Top Rated' fetchURL={requests.requestTopRated} />
      <Row Rowid ='5' title='Horror' fetchURL={requests.requestHorror} />
    </div>
  )
}

export default Home
