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
  const [renderData, setRenderData] = useState([]);
  const [card, setCard] = useState([]);
  // const KEY = "AIzaSyCRecMngvtKkNo-R0X_Y21P6hfitKsvGm4";
  // const searchQuery = "motos";

  // const handleSearch = async () => {
  //   const res = await fetch(
  //     `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=channel&q=${searchQuery}&safeSearch=none&key=${KEY}`
  //   );
  //   const data = await res.json();
  //   console.log(data);
  // &channelId=${channel_id}
  // };

  const handleSearch = () => {
    const searchQuery = "motos  ";
    const KEY = "AIzaSyCRecMngvtKkNo-R0X_Y21P6hfitKsvGm4";
    // const CHANNEL_ID = "UCWKo4qLJ1sYd-rTQPihB7_Q";
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&type=channels=${searchQuery}1safeSearch=none&key=${KEY}`
      )
      .then((results) => {
        const initialArray = results.data.items;
        const firstResult = results.data.items.splice(0, 1);
        console.log(firstResult);
        setRenderData(firstResult);
        const otherResults = initialArray;
        setCard(otherResults);

        setRenderData(results.data.items);
        setCard(results.data.items);

        console.log(results.data);
        // console.log(card);
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
                  Musica
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
        <br />
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
                  {x.snippet.description} <br />
                  {x.snippet.title} <br />
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
