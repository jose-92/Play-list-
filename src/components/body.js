import React from "react";
import "./styles/body.css";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const Body = (props) => {
  return (
    <div className="container__body">
      <div className="container__card-item">
        <Link to="#">
          <img
            className="prf_img"
            src="https://i.ytimg.com/vi/isQWXmbwURw/mqdefault.jpg"
          />
          <p className="prf">
            Jackie Evancho - Imaginer (from Dream With Me In Concert)
          </p>
          <p className="prf">{props.nombre}</p>
        </Link>
      </div>
      <div className="container__card-item">
        <Link to="#">
          <img
            className="prf_img"
            src="https://i.ytimg.com/vi/isQWXmbwURw/mqdefault.jpg"
          ></img>
          <p className="prf">
            Jackie Evancho - Imaginer (from Dream With Me In Concert)
          </p>
          <p className="prf">Jackie evancho </p>
        </Link>
      </div>
    </div>
  );
};

export default Body;
