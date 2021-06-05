import React from "react";
import { Box, Checkbox, Grid, makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  main_d: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px"
  },
  dialog: {
    borderRadius: "10",
    boxShadow: "0px 5px 50px rgba(0, 0, 0, 0.1)",
    width: "50%",
    paddingTop: '10px',
    paddingBottom: '70px'
  },

  main_div: {
    margin: '5px 40px',
    overflowY: "auto",
    overflowX: "hidden",
    paddingRight: '10'
  },

  title: {
    margin: '54px 40px 10px 40px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  saveBtn: {
    float: 'right',
  },

  formTextField: {
    '&>div': {
      backgroundColor: '#ffff',
      borderRadius: '10px',
      height: '51px',
      '&>input': {
        color: '#000'
      }
    }
  },
  formSelect: {
    borderRadius: '10px',
    backgroundColor: '#ffff',
    height: '51px',
    '&>div': {
      color: '#000'
    }
  },
  formTextArea: {
    '&>div': {
      backgroundColor: '#ffff',
      borderRadius: '10px',
      height: 'auto',
      '&>textarea': {
        color: '#000'
      }
    }
  },

})

const NewForm = () =>
{
  const classes = useStyle();

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [list, setList] = useState([]);


  const onSubmit = () =>
  {
    setList([...list, title]);
  }



  return (
    <>
      <div className={classes.main_d}>
        <div className={classes.dialog}>
          <Box className={classes.title}>
            <Typography variant="h4"> New Job </Typography>
            <Box>
              <CloseIcon className="close"></CloseIcon>
            </Box>
          </Box>
          <div className={classes.main_div}>
            <div className="edit_dialog">
              <Typography variant="h6">
                <Checkbox
                  color="primary"
                  checkedIcon={<CheckCircleIcon />}
                  name="checked"
                />{" "}
              Basic Details
            </Typography>
            </div>
            <Grid
              direction="row"
              justify="space-between"
              className="job_title"
              spacing={5}
              container
              style={{ margin: "10px -20px" }}
            >
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  Job Title
              </Typography>
                <TextField
                  placeholder="Enter a job title"
                  variant="outlined"
                  fullWidth
                  name={title}
                  value={title}
                  className={classes.formTextField}
                  onChange={(e) => { setTitle(e.target.value) }}
                ></TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  Position Type
              </Typography>
                <Select variant="outlined" className={classes.formSelect} fullWidth>
                  <option value="full-time">Full Time</option>
                  <option value="remote-work">Internship</option>
                  <option value="remote-work">Remote Work</option>
                  <option value="part-time">part Time</option>
                  
                </Select>
              </Grid>
            </Grid>
            <Box className="location">
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                Location (you can add multiple location)
            </Typography>
              <Grid item spacing={5} xs={12} sm={6} md={6} lg={6}>
                <TextField
                  placeholder="Enter location"
                  variant="outlined"
                  className={classes.formTextField}
                  fullWidth
                  style={{ marginBottom: "10px" }}
                  value={location}
                  onChange={(e) => { setLocation(e.target.value) }}
                />
              </Grid>
            </Box>
            <Grid spacing={5} container>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                className="switcher"
                justify="space-between"
                container
              >
                <Typography style={{ fontWeight: "bold" }}>
                  Remote Opportunity
              </Typography>
                <Switch color="primary" />
              </Grid>
            </Grid>
            <Grid spacing={5} container>
              <Grid item lg={12} md={12} className="description">
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  Job Description
              </Typography>
                <TextField
                  placeholder="UI Design for Websites and Apps."
                  variant="outlined"
                  multiline
                  fullWidth
                  rows={4}
                  className={classes.formTextArea}
                  style={{ marginBottom: "20px" }}
                />
              </Grid>
            </Grid>
            <Grid
              direction="row"
              justify="space-between"
              spacing={5}
              container
              style={{ marginBottom: "10px" }}
            >
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Seniority
              </Typography>
                <Select variant="outlined" className={classes.formSelect} fullWidth >
                  <option value="manager">Manager</option>
                  <option value="director">Director</option>
                </Select>
              </Grid>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
                  Closest Job Function
              </Typography>
                <Select variant="outlined" className={classes.formSelect} fullWidth >
                  <option value="node">node</option>
                  <option value="react">react</option>
                  <option value="etc">etc</option>
                </Select>
              </Grid>
            </Grid>
            <Box style={{ marginBottom: "10px" }}>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                Required Hard Skills
            </Typography>
              <TextField
                variant="outlined"
                className={classes.formTextField}
                placeholder="search skills"
                fullWidth
              />
            </Box>
            <Grid spacing={5} container>
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
                className="switcher"
                justify="space-between"
                container
              >
                <Typography style={{ fontWeight: "bold" }}>
                  Is visa sponsorship available?
              </Typography>
                <Switch color="primary" />
              </Grid>
            </Grid>
            <div className="edit_dialog">
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <Typography variant="h6">
                  {" "}
                  <Checkbox
                    color="primary"
                    checkedIcon={<CheckCircleIcon />}
                    name="checked"
                    style={{ margin: "10px 0" }}
                  />
                Primary Persona
              </Typography>
                <Select variant="outlined" className={classes.formSelect} fullWidth>
                  <option value="service">Service</option>
                  <option value="finance">Finance</option>
                  <option value="engineer">Engineer</option>
                  <option value="abc">abc</option>
                </Select>
              </Grid>

              <div className={classes.saveBtn}>
                <Link to="/">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                      width: "110px",
                      height: "50px",
                      borderRadius: "10px",
                      fontSize: "18px",
                      textTransform: "capitalize",
                    }}

                    onClick={onSubmit}
                  >
                    Save
              </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  );
};
export default NewForm;
