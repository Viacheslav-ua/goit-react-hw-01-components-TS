import React from "react";
import "./Statistics.css";

interface StatisticsList {
  id: string;
  label: string;
  percentage: number;
}

type StatisticsProps = {
  title: string;
  stats: StatisticsList[];
};

const Statistics: React.FC<StatisticsProps> = ({ title, stats }) => {
  return (
    <section className="Statistics">
      {title && <h2 className="Statistics__title">{title}</h2>}

      <ul className="Statistics__list">
        {stats.map((item) => (
          <li key={item.id} className="Statistics__item">
            <span className="Statistics__label">{item.label}</span>
            <span className="Statistics__percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Statistics;
