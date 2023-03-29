import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Session.module.scss";
import { formatSession } from "formatters/formatSession";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

function Session({ data }) {
  const [sessionData, setSessionData] = useState([]);
  useEffect(() => {
    async function formateData() {
      const formattedSession = await formatSession(data);
      setSessionData(formattedSession);
    }
    formateData();
  }, [data]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className={styles.tooltip}>
          <p className="label">{`${data.time} min`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={sessionData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey="name"
            stroke="#FFFFFF"
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="time"
            strokeWidth={2}
            stroke="#FFFFFF"
            activeDot={{ r: 6 }}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="time"
            strokeWidth={2}
            stroke="#FFFFFF"
            activeDot={{ r: 6 }}
            dot={false}
          />
          <text
            x={100}
            y={30}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            fill="rgba(255, 255, 255, 0.5)"
          >
            Durée moyenne des
          </text>
          <text
            x={60}
            y={50}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            fill="rgba(255, 255, 255, 0.5)"
          >
            sessions
          </text>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

Session.propTypes = {
  data: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    sessions: PropTypes.array.isRequired,
  }).isRequired,
};

export default Session;
