import React, { useEffect, useState } from "react";
import SearchAppBar from "../TopMenu/TopMenu";
import SecondTop from "../SecondTop/SecondTop";
import { Box, Button, Grid, Typography } from "@mui/material";
import "./PatientList.css";
import { Col, Row } from "reactstrap";
import SinglePatients from "../SinglePatients/SinglePatients";
const PatientList = () => {
  const [pateints, setPateints] = useState([]);
  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/faiz8411/task-dashboard/main/PatientDetails.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPateints(data));
  }, []);
  return (
    <div style={{ background: "#DEECF1" }}>
      <SearchAppBar name="Diane Cooper" />
      <SecondTop name="Diane Cooper" />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {pateints.map((pd) => (
            // <Grid
            //   spacing={2}
            //   style={{
            //     // background: "white",
            //     display: "flex",
            //     marginTop: "20px",
            //   }}
            // >
            //   <Grid md={8} style={{ display: "flex" }}>
            //     <Grid style={{ marginLeft: "20px" }}>
            //       <div className="circle"></div>
            //       <div className="name">{pd.name}</div>
            //       <div
            //         style={{
            //           textAlign: "center",
            //           color: "gray",
            //           fontSize: "10px",
            //         }}
            //       >
            //         xyzyrre78@gmail.com
            //       </div>
            //       <Row
            //         style={{
            //           display: "flex",
            //           marginLeft: "50px",
            //         }}
            //       >
            //         <Col
            //           style={{
            //             marginLeft: "10px",
            //           }}
            //         >
            //           <div
            //             style={{
            //               textAlign: "center",
            //               borderRight: "1px solid gray",
            //               marginLeft: "5px",
            //             }}
            //           >
            //             <h4 style={{ fontWeight: "bolder" }}> {pd.Past}</h4>
            //             <h5 style={{ color: "gray" }}>Past</h5>
            //           </div>
            //         </Col>
            //         <Col style={{ marginRight: "10px" }}>
            //           <div style={{ textAlign: "center" }}>
            //             <h4 style={{ fontWeight: "bolder" }}> {pd.Upcoming}</h4>
            //             <h5 style={{ color: "gray" }}>UpComing</h5>
            //           </div>
            //           <button
            //             style={{
            //               fontSize: "15px",
            //               fontWeight: "bolder",
            //               marginRight: "50px",
            //             }}
            //           >
            //             send message
            //           </button>
            //         </Col>
            //       </Row>
            //     </Grid>
            //     <Grid>
            //       <div>
            //         <div className="row">
            //           <div className="col-md-4">
            //             <div>
            //               <p>street address</p>
            //             </div>
            //           </div>
            //         </div>
            //       </div>
            //     </Grid>
            //   </Grid>

            //   <Grid>hi</Grid>
            // </Grid>
            <SinglePatients
              key={pd.name}
              pd={pd}
              City="cilacap"
              date1="26 Nov,19"
            />
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default PatientList;
