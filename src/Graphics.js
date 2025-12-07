import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

function Graphics({ colorCount }) {

  const data = {
    labels: ["Colors Generated"],
    datasets: [
      {
        label: "Random Colors Generated",
        data: [colorCount],
        backgroundColor: ["rgba(255, 99, 132, 0.6)"],
      },
    ],
  };

  return (
    <div style={{ width: "400px", marginTop: "20px" }}>
      <Bar data={data} />
    </div>
  );
}

export default Graphics;
