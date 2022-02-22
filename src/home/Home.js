import React, { useEffect, useState } from "react";
import catergoryApi from "../api/catergory";
import movieApi from "../api/movieApi";
import Featured from "../components/featured/Featured";
import ListMovies from "../components/list/ListMovies";
import Navbar from "../components/navbar/Navbar";
import "./home.css";

function Home() {
  const [listCatergory, setListCatergory] = useState([]);
  // const [listMovies, setListMovies] = useState([]);

  // useEffect(() => {
  //   movieApi.getAll().then((response) => {
  //     setListMovies(response.data);
  //     // console.log(response);
  //   });
  // }, []);

  useEffect(() => {
    catergoryApi
      .getAll()
      .then((response) => {
        setListCatergory(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  return (
    <div className="home">
      <Navbar />
      <Featured />
      {listCatergory.map((catergory) => (
        <ListMovies categories={catergory} />
      ))}
    </div>
  );
}

export default Home;
