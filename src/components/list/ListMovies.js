import { useState, useEffect } from "react";
import ItemMovie from "../item/ItemMovie";
import movieApi from "../../api/movieApi";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Carousel } from "@trendyol-js/react-carousel";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import "./listMovies.css";

function ListMovies({ title }) {
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    movieApi.getAll().then((response) => {
      setListMovies(response.data);
      // console.log(response);
    });
  }, []);

  const RenderItem = () => {
    return (
      <Carousel
        leftArrow={<ArrowBackIosNewRoundedIcon className="sliderArrow left" />}
        rightArrow={
          <ArrowForwardIosRoundedIcon className="sliderArrow right" />
        }
        show={4.5}
        slide={3}
        swiping={true}
      >
        {/* {listMovies.map((movie) => console.log(movie))} */}
        {/* <ItemMovie />
  <ItemMovie />
  <ItemMovie />
  <ItemMovie />
  <ItemMovie />
  <ItemMovie /> */}
        {listMovies.map((movie) => (
          <ItemMovie movie={movie} />
        ))}
      </Carousel>
    );
  };

  console.log(listMovies);
  return (
    <Box className="list">
      <Typography className="listTitle">{title}</Typography>
      <Box className="wrapper">
        <Box className="container">
          {/* {listMovies && (

          )} */}
          <RenderItem />
        </Box>
      </Box>
    </Box>
  );
}

export default ListMovies;
