import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { makeStyles } from "@mui/styles";
import { styled } from "@mui/system";

const MyButton = styled(Button)({
  border: "none",
});

const useStyles = makeStyles({
  play: {
    backgroundColor: "white !important",
    color: "black !important",
  },

  more: {
    backgroundColor: "gray !important",
    color: "white",
  },
});

function Featured() {
  const classes = useStyles();

  return (
    <div>
      <img
        style={{
          width: "100%",
          position: "relative",
        }}
        src="https://occ-0-64-395.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABbnf4JoVPWCBVrh42EKqTKTAIO_C0Fksk9RiqiL3V9GcahGp7x5GB89EcVeWu21ujCdD-c1xck3sbqHk_WiuXa33OLQS.webp?r=82e"
        alt=""
      ></img>
      <div
        className="info"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: "50px",
          display: "flex",
          alignItems: "center",
          // width: "35%",
          color: "white",
        }}
      >
        <div>
          <div>
            <img
              // style={{ objectFit: "cover" }}
              style={{ width: "400px" }}
              src="https://occ-0-64-395.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABc1K-UOm6ZctwE3gPYerB5uKi0xExOy4_0tfv8FbhkAfzecrxohqONOh1P7SvlzPFlr1DPNuLpmOg1_K0TkUxhr8sF2izzaC5ylN.webp?r=abd"
              alt="Minions"
            ></img>
          </div>
          <span
            className="desc"
            style={{ margin: "20px 0", fontSize: "16px", display: "block" }}
          >
            kkkkkkk kkkkkkk kkk
          </span>
          <div>
            <Stack direction="row" spacing={2}>
              <MyButton
                className={classes.play}
                variant="outlined"
                startIcon={<PlayArrowIcon />}
              >
                Play
              </MyButton>
              <MyButton
                className={classes.more}
                variant="contained"
                startIcon={<InfoOutlinedIcon />}
              >
                Orther Information
              </MyButton>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
