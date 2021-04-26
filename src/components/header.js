import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import "./styles/CSS.css";
import "bootstrap/dist/css/bootstrap.css";
import Body from "./body";
import Main from "./main";
import Footer from "./footer";
import ReactPlayer from "react-player";

const Header = () => {
  const [renderData, setRenderData] = useState("");
  // const KEY = "AIzaSyCRecMngvtKkNo-R0X_Y21P6hfitKsvGm4";
  // const searchQuery = "motos";

  // const handleSearch = async () => {
  //   const res = await fetch(
  //     `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=channel&q=${searchQuery}&safeSearch=none&key=${KEY}`
  //   );
  //   const data = await res.json();
  //   console.log(data);
  // };

  const handleSearch = async () => {
    const searchQuery = "musica";
    const KEY = await "AIzaSyCRecMngvtKkNo-R0X_Y21P6hfitKsvGm4";
    const channel_id = "UCBNErgmIAhgCzqI1-nURPeQ";
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=channel&q=${searchQuery}&safeSearch=none&key=${KEY}&channelId=${channel_id}`
      )
      .then((results) => {
        setRenderData(results.data.items);
        console.log(results.data);
      });
  };

  useEffect(() => {
    handleSearch();
  }, []);
  return (
    <BrowserRouter>
      <div className="container__pg">
        <div className="container__playlist">
          <h1 className="navbar navbar-dark bg-dark  playlist">PLAY LIST</h1>
          <div className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item active">
                <Link className="nav-link" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Musica-
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Video
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="#">
                  Tendencia
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <br />
        <br />

        {/* <Main /> */}
        <h4>Lista de canales de Youtube</h4>
        <div>
          {renderData &&
            renderData.map((x, id) => (
              <div key={id}>
                <ReactPlayer
                  controls
                  width="100%"
                  height="400px"
                  className="container__video-header"
                  url={`https://www.youtube.com/watch?v=` + x.id.videoId}
                />
                <br />
                <a
                  target="blank"
                  href={`https://www.youtube.com/watch?v=` + x.id.videoId}
                >
                  {x.snippet.title} <br />
                  {x.snippet.channelTitle} <br />
                </a>
              </div>
            ))}
          <Body />
          <Body />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
export default Header;
