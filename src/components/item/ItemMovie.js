import React from "react";
import "./itemMovie.css";
import { Box, Typography, Paper } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpTwoToneIcon from "@mui/icons-material/ThumbUpTwoTone";
import ThumbDownTwoToneIcon from "@mui/icons-material/ThumbDownTwoTone";

function ItemMovie({ movie }) {
  return (
    <>
      <Box className="item">
        <img src={movie.img} alt="Avatar" class="image" />
        <Box components={Paper} elevation={12} className="overlay">
          <iframe
            // ref={videoRef}
            width="100%"
            height="120px"
            src={movie.video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <Box className="content">
            <Box className="icons">
              <PlayArrowIcon className="icon" />
              <AddIcon className="icon" />
              <ThumbUpTwoToneIcon className="icon" />
              <ThumbDownTwoToneIcon className="icon" />
            </Box>
            <Box className="itemInfo">
              <Typography>{movie.time}</Typography>
              <Typography className="limit">{movie.limit}</Typography>
              <Typography>{movie.year}</Typography>
            </Box>
            {/* <Box className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium hic rem eveniet error possimus, neque ex doloribus.
            </Box> */}
            <Box className="genre">{movie.genre}</Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ItemMovie;
