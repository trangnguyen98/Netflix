import { useState, useEffect } from "react";
import ItemMovie from "../item/ItemMovie";
import movieApi from "../../api/movieApi";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Carousel } from "@trendyol-js/react-carousel";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { makeStyles } from "@mui/styles";
import "./listMovies.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  
})

function ListMovies({ categories }) {
  const classes = useStyles()
  console.log(categories);
  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    movieApi.getAll().then((response) => {
      setListMovies(response.data);
      // console.log(response);
    });
  }, []);

  const catergoryMovies = listMovies.filter((movie) => {
    if (movie.catergory === categories.id) {
      return movie;
    }
  });
  console.log("movies22", catergoryMovies);

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
        {catergoryMovies.map((movie) => (
          <ItemMovie key={movie.id} movie={movie} />
        ))}
      </Carousel>
    );
  };

  console.log(listMovies);
  return (
    <Box className="list">
      <Link to="/listitem" style={{textDecoration: "none"}} catergoryMovies={catergoryMovies}>
        <Box
          className="headerTitle"
          style={{ display: "flex", cursor: "pointer" }}
        >
          <Box className={classes.titleMovie}>
            <Typography className="hu" variant="h4">{categories.title}</Typography>
          </Box>
          <Box className={classes.seeAll} pl={2}>
            <Typography variant="subtitle1"> Xem tất cả</Typography>
            <ChevronRightIcon />
          </Box>
        </Box>
      </Link>
      <Box className="wrapper">
        <Box className="container">
          <RenderItem />
        </Box>
      </Box>
    </Box>
  );
}

export default ListMovies;
