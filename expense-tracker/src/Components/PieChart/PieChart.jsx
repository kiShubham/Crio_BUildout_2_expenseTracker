/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Chart } from "chart.js/auto";
import { Pie, Bar, Doughnut } from "react-chartjs-2";
import styles from "./PieChart.module.css";
import { useState } from "react";

const PieChart = (data_1) => {
  const [data, setData] = useState({ food: 30, books: 50, entertaiment: 20 });

  return (
    <div className={styles.PieChart}>
      <Pie
        className={styles.chart}
        id="451"
        data={{
          labels: [...Object.keys(data)],
          //   labels: [],
          datasets: [
            {
              label: "User expenses",
              data: Object.values(data), //array
              //   borderRadius: 4,
              borderWidth: 2,
              fontColor: ["rgba(255,255,255,1)"],
              borderColor: "rgba(0,0,0,0)",
              spacing: 0.1,
              backgroundColor: [
                "rgba(245, 158, 11,0.8)",
                "rgba(250, 204, 21,0.8)",
                "rgba(160, 0, 255, 0.8)",
              ],
              hoverOffset: 20,
            },
          ],
        }}
      />
    </div>
  );
};

export default PieChart;

/*   "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",*/
