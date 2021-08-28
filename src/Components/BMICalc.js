import React, { useState, useEffect } from "react";
import data from "./data.json";
import "./bmi.css";
import BmiTable from "./Table/Table";

const CalculateBMI = () => {
  const [bmi, setBmi] = useState([]);
  useEffect(() => {
    setBmi([]);
    if (Array.isArray(data) && data.length > 0) {
      data.map((val) => {
        let hSQ = Math.pow(val.HeightCm / 100, 2);
        let calculatedBMI = val.Weight / hSQ;
        let bmiVal = Math.round(calculatedBMI * 10) / 10;
        let riskVal = calcRisk(bmiVal);

        const data = {
          id: val.id,
          first_name:val.first_name,
          gender: val.gender,
          height: val.HeightCm,
          weightKg: val.Weight,
          bmiValue: calculatedBMI.toFixed(1),
          risk: riskVal,
        };

        setBmi((prev) => [...prev, data]);
        return null;
      });
    }
  }, []);

  const calcRisk = (bmiVal) => {
    if (bmiVal <= 18.4) return "Malnutrition Risk";
    else if (bmiVal >= 18.5 && bmiVal <= 24.9) return "Low Risk";
    else if (bmiVal >= 25 && bmiVal <= 29.9) return "Enhanced Risk";
    else if (bmiVal >= 30 && bmiVal <= 34.9) return "Medium Risk";
    else if (bmiVal >= 35 && bmiVal <= 39.9) return "High Risk";
    else if (bmiVal >= 40) return "Very High Risk";
  };

  return (
    <div>
      {Array.isArray(bmi)&& bmi.length > 0 && <BmiTable bmi={bmi} />}
    </div>
  );
};

export default CalculateBMI;
