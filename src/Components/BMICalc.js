import React, { useState ,useEffect} from "react"
import data from "./data.json"
import "./bmi.css"

const CalculateBMI = () => {
  const [bmi, setBmi] = useState([]);
  useEffect(() => {
    setBmi([]);
    Array.isArray(data) && data.length > 0 && data.map((val) => {
      let hSQ = Math.pow((val.HeightCm / 100), 2);
      let calculatedBMI = (val.WeightKg / hSQ);
      let bmiVal = Math.round(calculatedBMI * 10) / 10;
      let riskVal = calcRisk(bmiVal);

      const data = {
        id:val.id,
        gender: val.Gender,
        height:( val.HeightCm / 100),
        weightKg:val.WeightKg,
        bmiValue: calculatedBMI.toFixed(1),
        risk :riskVal, 
      }

      setBmi((prev) => [...prev,data])
  }
    )
  }, [data])

  const calcRisk = (bmiVal) => {
        if (bmiVal <= 18.4)
          return ("Malnutrition Risk")
        else if (bmiVal >= 18.5 && bmiVal <= 24.9)
          return ("Low Risk")
        else if  (bmiVal >= 25 && bmiVal <= 29.9)
          return ("Enhanced Risk")
        else if  (bmiVal >= 30 && bmiVal <= 34.9)
          return ("Medium Risk")
        else if  (bmiVal >= 35 && bmiVal <= 39.9)
          return ("High Risk")
        else if  (bmiVal >= 40 )
          return ("Very High Risk")
  }

  
  return (
    <div>
      {Array.isArray(bmi) && bmi.length > 0 ? (
        <div className="container--BMI">
          {
            bmi.map((val) =>
              <div key={val.id}>
                <sapn className="each--span">{val.gender}</sapn>
                <sapn className="each--span">{val.height}</sapn>
                <sapn className="each--span">{val.weightKg}</sapn>
                <sapn className="each--span">{val.bmiValue}</sapn>
                <sapn className="each--span">{val.risk}</sapn>
              </div>
            )
          }
        </div>
      ) : null}
    </div>
)
}

export default CalculateBMI;