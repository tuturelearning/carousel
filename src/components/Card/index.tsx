import React from "react";
import "./index.less";

export interface CardOptions {
  title?: string;
  description?: string;
  imgUrl?: string;
}

export interface CardlProps {
  options?: CardOptions;
  style?: React.CSSProperties;
}

const Card: React.FC<CardlProps> = ({ options, style }) => {
  return (
    <div className="card" style={style}>
      <div className="card-title">{options?.title}</div>
      <div className="card-description">{options?.description}</div>
      <div className="card-img">
        <img src={options?.imgUrl} alt="" />
      </div>
    </div>
  );
};

export default Card;
