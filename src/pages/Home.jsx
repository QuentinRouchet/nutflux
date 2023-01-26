import React from 'react';
import requests from '../Requests';
import Main from '../components/Main';
import Row from '../components/Row';

function Home() {
  return (
    <div>
        <Main />
        <Row rowID='1' title='Netflix Original' fetchURL={requests.fetchNetflixOriginals} />
        <Row rowID='2' title='Trending' fetchURL={requests.fetchTrending} />
        <Row rowID='3' title='Top Rated' fetchURL={requests.fetchTopRated} />
        <Row rowID='4' title='Action' fetchURL={requests.fetchActionMovies} />
        <Row rowID='5' title='Comedy' fetchURL={requests.fetchComedyMovies} />
        <Row rowID='6' title='Horror' fetchURL={requests.fetchHorrorMovies} />
        <Row rowID='7' title='Romance' fetchURL={requests.fetchRomanceMovies} />
        <Row rowID='8' title='Documentaries' fetchURL={requests.fetchDocumentaries} />
    </div>
  )
}

export default Home;