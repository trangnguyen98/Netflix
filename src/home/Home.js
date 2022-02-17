import React from "react";
import Featured from "../components/featured/Featured";
import ListMovies from "../components/list/ListMovies";
import Navbar from "../components/navbar/Navbar";
import "./home.css";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Featured />
      <ListMovies title="Trending now" />
      <ListMovies title="U.S. UK TV show" />
      <ListMovies title="Asian movies" />
    </div>
  );
}

export default Home;
