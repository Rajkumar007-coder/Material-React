import React from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import Data from "./Data";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  main_div: {
    display: "flex",
    justifyContent: "center",
    marginTop:"50px"
  },
  dialoge: {
    height: "60vh",
    borderRadius: "10px",
    boxShadow: "0px 5px 50px rgba(0, 0, 0, 0.1)",
    width: "70%",
    padding: "30px",
  },
  card: {
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "10px 30px",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  main_card: {
    margin: "25px 0px",
    justifyContent: "space-around",
  },
 
});

const Main = () =>
{
  const classes = useStyle();




  return (
    <>
      <div className={classes.main_div}>
        <div className={classes.dialoge}>
          <Box>
            <Box>
              <a href='/newform'>
                <Button
                  variant="contained"
                  style={{ float: "right", textTransform: "capitalize" }}
                  color="primary"
                >
                  <AddIcon />
              New Job
            </Button>
              </a>
            </Box>
            <Typography variant="h5"> Active Job</Typography>
          </Box>
          <Grid
            direction="row"
            justify="space-between"
            spacing={0}
            container
            className={classes.main_card}
          >
            {
              Data.map((val) =>
              {
                return (
                  <Grid item xs={12} sm={6} md={6} lg={5} className={classes.card}>
                    <div>
                      <h4 style={{ marginBottom: "-10px" }}>{val.title}</h4>
                      <p>{val.location}</p>
                    </div>
                    <Link to='#'>
                      <DeleteForeverIcon style={{ marginTop: "30px" }} />
                    </Link>

                  </Grid>

                )
              })
            }
          </Grid>

        </div>
      </div>
    </>
  );
};
export default Main;
