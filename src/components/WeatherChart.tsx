import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface WeatherChartProps {
  data: any[];
}

const WeatherChart: React.FC<WeatherChartProps> = ({ data }) => {
  const [chartWidth, setChartWidth] = useState(window.innerWidth * 0.9);

  useEffect(() => {
    const handleResize = () => {
      setChartWidth(window.innerWidth * 0.9);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ResponsiveContainer width="90%" height={300}>
      <LineChart width={chartWidth} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="dt_txt" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="main.temp" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default WeatherChart;
