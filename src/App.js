
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';

function App() {
  return (
    <div className="App">
     <Router>
      <Header />
        <Routes>
          {/* home page ka*/}
            <Route index element = { <Home />}></Route>
            {/*To humare pass 3 route honge 
            1-> Home page ke lie
            2-> movie ki puri list dikhane k lie
  3-> movie ki detail dikhane k lie*/}

{/*ab hum dusra route lagane jaare hai*/}

<Route path="movie/:id" element={ <Movie />}> </Route>
 {/* This route takes id and it is dynamic koi sa bhi movie ka id aasakat hai*/}
<Route path="movies/:type" element={ <MovieList />}> </Route>
<Route path="/*" element={ <h1> Error Page </h1>}> </Route>

        </Routes>
     </Router>
      
    </div>
  );
}

export default App;
