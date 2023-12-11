
import './App.css';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './requests';


function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>

      <Row isPresent ={true}  title='Trending' fetchUrl={requests.fetchTrending} />

      <Row title='NetflixOriginals' fetchUrl={requests.fetchNetflixOriginals} />

      <Row title='TopRated' fetchUrl={requests.fetchTopRated} />

      <Row title='ActionMovies' fetchUrl={requests.fetchActionMovies} />

      <Row title='ComedyMovies' fetchUrl={requests.fetchComedyMovies} />

      <Row title='Horror' fetchUrl={requests.fetchHorrorMovies} />

      <Row title='Romance' fetchUrl={requests.fetchRomanceMovies} />

      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
