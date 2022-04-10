import React, { useEffect, useState } from "react";
import "./Doctor.css";
const Doctor = () => {
  const [doctors, setDoctor] = useState([]);
  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/faiz8411/task-dashboard/main/PatientDetails.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDoctor(data));
  }, []);
  //   console.log(pagol);
  return (
    <div>
      {doctors.map((pd) => (
        // <li key={pd.name}>{pd.name}</li>
        <div className="docContainer">
          {" "}
          <div className="doc"></div>
          <div>
            <div className="docS">
              <h6 style={{ marginTop: "25px", fontWeight: "900px" }}>
                {pd.name}
              </h6>
              <h6 className="specification">{pd.specification}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Doctor;
