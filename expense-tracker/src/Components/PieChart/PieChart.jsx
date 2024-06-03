/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Chart } from "chart.js/auto";
import { Pie, Bar, Doughnut } from "react-chartjs-2";
import styles from "./PieChart.module.css";
import { useEffect, useState } from "react";

const PieChart = ({ graphData }) => {
  const [data, setData] = useState({ food: 100, travel: 0, entertaiment: 0 });

  const generatedata = (graphData) => {
    let obj = { food: 0, travel: 0, entertaiment: 0 };
    if (graphData.length) {
      graphData.forEach((e) => {
        if (e.category === "food") {
          obj.food += parseInt(e.price);
        } else if (e.category === "travel") {
          obj.travel += parseInt(e.price);
        } else if (e.category === "entertaiment") {
          obj.entertaiment += parseInt(e.price);
        }
      });
    } else {
      return (obj = { food: 100, travel: 0, entertaiment: 0 });
    }
    return obj;
  };
  useEffect(() => {
    let obj = generatedata(graphData);
    setData(obj);
  }, [graphData]);
  return (
    <div className={styles.PieChart}>
      <Pie
        className={styles.chart}
        id="451"
        data={{
          labels: [...Object.keys(data)], //[label1, label2,label3]
          // labels: [],
          datasets: [
            {
              label: "User expenses",
              data: Object.values(data), //array-[30,50,20]
              borderRadius: 4,
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
