import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  const totalMaximum = Math.max(
    ...dataPoints.map((dataPoint) => dataPoint.value)
  );

  return (
    <div className="chart">
      {dataPoints.map(({ value, label }) => (
        <ChartBar
          value={value}
          maxValue={totalMaximum}
          label={label}
          key={label}
        />
      ))}
    </div>
  );
};

export default Chart;
