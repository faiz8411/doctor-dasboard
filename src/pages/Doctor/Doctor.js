import React, { useEffect, useState } from "react";
import "./Doctor.css";
const Doctor = () => {
  const [doctors, setPagol] = useState([]);
  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/faiz8411/doctor-dasboard/main/public/doctor_detail.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPagol(data));
  }, []);
  //   console.log(pagol);
  return (
    <div>
      {doctors.map((pd) => (
        // <li key={pd.name}>{pd.name}</li>
        <div className="docContainer">
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
