// import logo from './logo.svg';
import "./App.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { BsPlusCircle } from "react-icons/bs";
import Logo from "./logo-1.png";

import Constant from "./constantimage.png";
import { RxAvatar } from "react-icons/rx";
function App() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }} className="dashboard">
        <Grid container spacing={2}>
          <Grid item xs={12} className="header">
            <Grid>
              <Grid container spacing={2}>
                <Grid item xs="2.4">
                  <div>
                    <BsPlusCircle />
                  </div>
                  <div>CONNECT TO LEAD GEN & CRM </div>
                </Grid>
                <Grid item xs="2.4">
                  <div>
                    <BsPlusCircle />
                  </div>
                  <div>CONNECT TO PANDADOC</div>
                </Grid>
                <Grid item xs="2.4">
                  <div>
                    <BsPlusCircle />
                  </div>
                  <div>ADD PAYMENT METHOD </div>
                </Grid>
                <Grid item xs="2.4">
                  <div>
                    <BsPlusCircle className="BsPlusCircle" />
                  </div>
                  <div>SYNC</div>
                </Grid>
                <Grid item xs="2.4">
                  <div>
                    <RxAvatar className="avatar" />
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid>
            <Grid container spacing={2}>
              <Grid item xs="auto">
                <div>
                  <img src={Logo} alt=""></img>
                </div>
              </Grid>
              <Grid
                item
                xs="auto"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <div>Link Lead Gen & CRM Account</div>

                <Grid>
                  <div>
                    Follow the instructions to begin linking your Lead Gen & CRM
                    account to envisionLXPJ
                  </div>
                </Grid>
                <Grid item xs="auto">
                  <div>
                    <img src={Constant} className="jii" alt=""></img>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid>
                <Grid container spacing={2}>
                  <Grid item xs="6">
                    <Grid>giiiiiiii</Grid>
                  </Grid>
                  <Grid item xs="6">
                    <Item>
                      {" "}
                      <div>
                        <BsPlusCircle />
                      </div>
                      <div>CONNECT TO PANDADOC</div>
                    </Item>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
