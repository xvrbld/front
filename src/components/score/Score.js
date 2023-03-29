import React from "react";
import PropTypes from "prop-types";
import styles from "./Score.module.scss";
import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
} from "recharts";

function Score({ score }) {
  const data = [
    {
      score: 100, // max score
      fill: "white", // background color
    },
    {
      score: score * 100, // current user score
      fill: "#E60000", // current score color
    },
  ];

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="80%"
          barSize={10}
          outerRadius="80%"
          data={data}
          startAngle={90}
          endAngle={450}
        >
          <RadialBar
            background={{ fill: "white" }}
            cornerRadius={5}
            max={100}
            dataKey="score"
            className={styles.container__bar}
          />

          <text
            x={50}
            y={25}
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
            Score
          </text>
          <text
            x={130}
            y={100}
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
            className="score-label"
            fontSize={28}
          >
            {`${score * 100}%`}
          </text>
          <text
            x={128}
            y={130}
            textAnchor="middle"
            dominantBaseline="middle"
            className="score-label"
          >
            de votre
          </text>
          <text
            x={128}
            y={150}
            textAnchor="middle"
            dominantBaseline="middle"
            className="score-label"
          >
            objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
