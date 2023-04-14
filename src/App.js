import api from "./api/axiosConfig";
import "./App.css";
import { useEffect, useState } from "react";
import React from "react";

function App() {
  const [movie, setMovie] = useState();
  const getMovies = async () => {
    try {
      const response = await api.get("api/v1/movies");
      console.log(response.data);
      setMovie(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return <div className="App"></div>;
}

export default App;
