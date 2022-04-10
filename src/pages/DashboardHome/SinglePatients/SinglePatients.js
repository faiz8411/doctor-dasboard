import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Col, Row } from "reactstrap";
import "./SinglePatients.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FeedIcon from "@mui/icons-material/Feed";
import ManIcon from "@mui/icons-material/Man";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import picture from "../../../image/download.jpg";
const SinglePatients = ({ pd, City, date1 }) => {
  return (
    <>
      <div
        className="container"
        style={{ marginTop: "20px", marginLeft: "30px" }}
      >
        <div className="row">
          <div
            className="col-md-8"
            style={{
              display: "flex",
              background: "white",
              border: "1px solid gray",
            }}
          >
            <div>
              <div>
                <img
                  src={picture}
                  alt=""
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div>
                <div style={{ fontSize: "20px", fontWeight: "bolder" }}>
                  {pd.name}
                </div>
                <div
                  style={{
                    textAlign: "center",
                    color: "gray",
                    fontSize: "10px",
                  }}
                >
                  xyzyrre78@gmail.com
                </div>
              </div>
              <div className="row" style={{ marginLeft: "30px" }}>
                <div className="col-md-6 first">
                  <div>
                    <h4>{pd.Past}</h4>
                    <h4>Past</h4>
                  </div>
                </div>
                <div className="col-md-6" style={{ marginLeft: "20px" }}>
                  <div>
                    <h4>{pd.Upcoming}</h4>
                    <h4>Upcoming</h4>
                  </div>
                </div>
              </div>
              <button>send message</button>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <div className="">
                <p style={{ color: "gray", fontSize: "12px" }}>Gender</p>
                <p>{pd.Gender}</p>
              </div>
              <div>
                <p
                  style={{
                    textAlign: "center",
                    color: "gray",
                    fontSize: "12px",
                  }}
                >
                  street address
                </p>
                <p style={{ fontSize: "15", fontWeight: "bold" }}>
                  {pd.Street}
                </p>
              </div>
              <div>
                <p
                  style={{
                    textAlign: "center",
                    color: "gray",
                    fontSize: "12px",
                  }}
                >
                  member status
                </p>
                <p style={{ fontSize: "15", fontWeight: "bold" }}>
                  {pd.Member}
                </p>
              </div>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <div className="">
                <p style={{ color: "gray", fontSize: "12px" }}>Birthday</p>
                <p>{pd.Birthday}</p>
              </div>
              <div>
                <p
                  style={{
                    textAlign: "center",
                    color: "gray",
                    fontSize: "12px",
                  }}
                >
                  City
                </p>
                <p style={{ fontSize: "15", fontWeight: "bold" }}>{City}</p>
              </div>
              <div>
                <p
                  style={{
                    textAlign: "center",
                    color: "gray",
                    fontSize: "12px",
                  }}
                >
                  Registration Date
                </p>
                <p style={{ fontSize: "15", fontWeight: "bold" }}>
                  {pd.Register}
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <Row style={{ background: "white" }}>
              <Col style={{ marginLeft: "30px" }}>notes</Col>
              <Col style={{ marginLeft: "400px", color: "blue" }}>see all</Col>
            </Row>
            <div style={{ textAlign: "center" }}>
              <p style={{ color: "#023B4F" }}>
                -Lorem Ipsum is simply dummy text of the printing
              </p>
              <p style={{ color: "#023B4F" }}>
                -Lorem Ipsum is simply dummy Lorem Ipsum
              </p>
              <p style={{ color: "#023B4F" }}>
                -honesty is simply dummy the text of the printing
              </p>
            </div>
            <Button
              style={{ marginLeft: "300px", marginTop: "20px" }}
              variant="contained"
            >
              Save Note
            </Button>
          </div>
        </div>
        <div style={{ background: "" }}>
          <h5 style={{ marginLeft: "350px" }}>lorem ipsum doctor sit amet</h5>
          <div style={{ marginLeft: "350px" }}>
            <ManIcon style={{ color: "blue" }} />
            <span style={{ color: "gray" }}>drg adam H</span>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "29px", background: "white" }}>
        <div className="row">
          <div className="col-md-8">
            <div>
              <Button
                style={{
                  marginLeft: "0px",
                  marginTop: "20px",
                  fontSize: "10px",
                  background: "white",
                }}
              >
                Upcoming Appointment
              </Button>
              <Button
                style={{
                  marginLeft: "0px",
                  marginTop: "20px",
                  fontSize: "10px",
                }}
              >
                Past Appointment
              </Button>
              <Button
                style={{
                  marginLeft: "0px",
                  marginTop: "20px",
                  fontSize: "10px",
                }}
              >
                Medical Records
              </Button>
            </div>
            <div>
              <Row>
                <Col>root cannel treatment</Col>
                <Col style={{ marginLeft: "150px", color: "gray" }}>
                  <KeyboardArrowUpIcon />
                  show previous treatment
                </Col>
              </Row>
            </div>
            <div className="row">
              <div className="col-md-3" style={{}}>
                <h5 style={{ fontSize: "18px" }}>{date1}</h5>
                <h6 style={{ marginBottom: "" }}>9:00-10:00</h6>
              </div>
              <div
                className="col-md-2"
                style={{ marginLeft: "10px", marginTop: "25px" }}
              >
                <p style={{ color: "gray" }}>treatment</p>
                <h4 style={{ marginTop: "5px" }}>open Access</h4>
              </div>
              <div
                className="col-md-2"
                style={{ marginLeft: "10px", marginTop: "25px" }}
              >
                <p style={{ color: "gray" }}>Dentist</p>
                <h5>drg Adam H</h5>
              </div>
              <div
                className="col-md-2"
                style={{ marginLeft: "10px", marginTop: "25px" }}
              >
                <p style={{ color: "gray" }}>Nurse</p>
                <h5>jassicomilla</h5>
              </div>
              <div
                className="col-md-2"
                style={{ marginLeft: "10px", marginTop: "25px" }}
              >
                <FeedIcon style={{ marginTop: "30px", color: "blue" }} />{" "}
                <Typography>notes</Typography>
              </div>
            </div>
          </div>
          <div className="col-md-4" style={{ background: "white" }}>
            <Row style={{ marginLeft: "10px" }}>
              <Col style={{ marginTop: "40px" }}>
                <div>Files</div>

                <div style={{ display: "flex", marginTop: "5px" }}>
                  <FeedIcon
                    style={{ marginTop: "", color: "gray", height: "20px" }}
                  />{" "}
                  <Typography style={{ fontSize: "10px" }}>checkup </Typography>
                </div>
                <div style={{ display: "flex", marginTop: "5px" }}>
                  <FeedIcon
                    style={{ marginTop: "", color: "gray", height: "20px" }}
                  />{" "}
                  <Typography style={{ fontSize: "10px" }}>dental </Typography>
                </div>
              </Col>
              <Col style={{ marginTop: "40px", marginLeft: "400px" }}>
                <div>
                  <AddBoxIcon style={{ height: "20px" }} />
                </div>
                <div>
                  <p style={{ fontSize: "10px" }}>123kb</p>
                </div>

                <div style={{ display: "flex" }}>
                  <div>
                    <DeleteOutlineIcon style={{ height: "20px" }} />
                  </div>
                  <div>
                    <DownloadForOfflineIcon style={{ height: "20px" }} />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePatients;
