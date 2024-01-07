import './App.css';
import api from "./api/axiosConfig";
import {useState, useEffect} from 'react';
import Layout from './componets/Layout';
import {Routes, Route} from 'react-router-dom';

function App() {

  const [movies, setMovies] = useState();
  
  const getMovies =  async () =>{
    
    try{
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
      console.log(response.data)

    }catch(err){
      console.log("Error while trying to obtein the movies details")
    }
  }

  useEffect( () => {
    getMovies();

  },[])


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
