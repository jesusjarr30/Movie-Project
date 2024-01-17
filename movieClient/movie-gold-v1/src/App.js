import './App.css';
import api from "./api/axiosConfig";
import {useState, useEffect} from 'react';
import Layout from './componets/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './componets/home/Home';

function App() {

  const [movies, setMovies] = useState([]);
  console.log("Se mando la peticion paraobtener las peliculas");
  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      if (response && response.data) {
        // Verificar que la respuesta y response.data no sean undefined
        setMovies(response.data);
        console.log(response.data);
        console.log("Los datos de las películas se obtuvieron");
      } else {
        console.log("Respuesta o datos de películas undefined");
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect( () => {
    getMovies();

  },[])


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home movies={movies} />} />
          </Route>
        </Route>

      </Routes>
      
    </div>
  );
}
export default App;
